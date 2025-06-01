// --- 2. Decorators ---
// Decorators são uma funcionalidade experimental em TypeScript que permite estender
// ou modificar classes, métodos, propriedades, acessores ou parâmetros em tempo de design.
// Para usar decorators, você precisa habilitar 'experimentalDecorators' e 'emitDecoratorMetadata'
// no seu tsconfig.json.

// **Passo Importante:**
// Habilite os decorators no seu tsconfig.json:
// Dentro de "compilerOptions":
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true,

// Decorator de Método: Loga quando o método é chamado
function LogMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; // Salva o método original

    descriptor.value = function (...args: any[]) {
        // Sobrescreve o método
        console.log(
            `[LogMetodo] Chamando método: ${propertyKey} com args: ${JSON.stringify(args)}`
        );
        const result = originalMethod.apply(this, args); // Chama o método original
        console.log(`[LogMetodo] Método ${propertyKey} retornou: ${result}`);
        return result;
    };

    return descriptor;
}

// Decorator de Classe: Adiciona uma propriedade à classe
function AdicionarTimestampCriacao(constructor: Function) {
    constructor.prototype.criadoEm = new Date();
    console.log(
        `[AdicionarTimestampCriacao] Timestamp de criação adicionado à classe ${constructor.name}`
    );
}

@AdicionarTimestampCriacao
class ServicoDeUsuario {
    nomeServico: string;

    constructor(nome: string) {
        this.nomeServico = nome;
    }

    @LogMetodo
    buscarUsuario(id: number): string {
        console.log(`Buscando usuário com ID: ${id}`);
        return `Usuário encontrado: ${id}`;
    }

    @LogMetodo
    salvarUsuario(nome: string, email: string): string {
        console.log(`Salvando usuário: ${nome}`);
        return `Usuário ${nome} salvo com sucesso!`;
    }
}

console.log('\n--- Exemplo de Decorators ---');

const meuServico = new ServicoDeUsuario('Serviço Principal');
meuServico.buscarUsuario(101);
meuServico.salvarUsuario('João', 'joao@example.com');

// Acessando a propriedade adicionada pelo decorator de classe
// Note que 'criadoEm' não está explicitamente definido na classe ServicoDeUsuario,
// mas foi adicionado pelo decorator.
// Para que o TypeScript não reclame em tempo de compilação, você pode fazer uma
// afirmação de tipo (type assertion) ou estender a classe com a propriedade.
console.log(`Serviço criado em: ${(meuServico as any).criadoEm}`);

// Decorator de Propriedade: Pode ser usado para modificar o comportamento de uma propriedade
// (Exemplo mais complexo, apenas para conhecimento, não entraremos em detalhes agora)
function PropriedadeSomenteLeitura(target: any, propertyKey: string) {
    let value = target[propertyKey]; // Valor inicial

    const getter = function () {
        return value;
    };

    const setter = function (newVal: any) {
        console.warn(
            `[PropriedadeSomenteLeitura] Tentativa de modificar propriedade somente leitura: ${propertyKey}`
        );
        // Não faz nada, ou lança um erro
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

class Configuracao {
    @PropriedadeSomenteLeitura
    public readonly versao: string = '1.0.0'; // Note que 'readonly' já faz isso em TS nativamente

    constructor() {
        // this.versao = "2.0.0"; // ERRO em tempo de compilação por 'readonly'
    }
}

const conf = new Configuracao();
console.log(`Versão da configuração: ${conf.versao}`);
// conf.versao = "2.0.0"; // Em JS puro, sem 'readonly', o decorator de propriedade faria o trabalho
// Mas com 'readonly' no TS, já é barrado em compilação.
// O decorator é mais útil para adicionar comportamento em runtime.
