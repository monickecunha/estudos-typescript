"use strict";
// --- 2. Decorators ---
// Decorators são uma funcionalidade experimental em TypeScript que permite estender
// ou modificar classes, métodos, propriedades, acessores ou parâmetros em tempo de design.
// Para usar decorators, você precisa habilitar 'experimentalDecorators' e 'emitDecoratorMetadata'
// no seu tsconfig.json.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// **Passo Importante:**
// Habilite os decorators no seu tsconfig.json:
// Dentro de "compilerOptions":
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true,
// Decorator de Método: Loga quando o método é chamado
function LogMetodo(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value; // Salva o método original
    descriptor.value = function (...args) {
        // Sobrescreve o método
        console.log(`[LogMetodo] Chamando método: ${propertyKey} com args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args); // Chama o método original
        console.log(`[LogMetodo] Método ${propertyKey} retornou: ${result}`);
        return result;
    };
    return descriptor;
}
// Decorator de Classe: Adiciona uma propriedade à classe
function AdicionarTimestampCriacao(constructor) {
    constructor.prototype.criadoEm = new Date();
    console.log(`[AdicionarTimestampCriacao] Timestamp de criação adicionado à classe ${constructor.name}`);
}
let ServicoDeUsuario = class ServicoDeUsuario {
    constructor(nome) {
        this.nomeServico = nome;
    }
    buscarUsuario(id) {
        console.log(`Buscando usuário com ID: ${id}`);
        return `Usuário encontrado: ${id}`;
    }
    salvarUsuario(nome, email) {
        console.log(`Salvando usuário: ${nome}`);
        return `Usuário ${nome} salvo com sucesso!`;
    }
};
__decorate([
    LogMetodo,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], ServicoDeUsuario.prototype, "buscarUsuario", null);
__decorate([
    LogMetodo,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], ServicoDeUsuario.prototype, "salvarUsuario", null);
ServicoDeUsuario = __decorate([
    AdicionarTimestampCriacao,
    __metadata("design:paramtypes", [String])
], ServicoDeUsuario);
console.log('\n--- Exemplo de Decorators ---');
const meuServico = new ServicoDeUsuario('Serviço Principal');
meuServico.buscarUsuario(101);
meuServico.salvarUsuario('João', 'joao@example.com');
// Acessando a propriedade adicionada pelo decorator de classe
// Note que 'criadoEm' não está explicitamente definido na classe ServicoDeUsuario,
// mas foi adicionado pelo decorator.
// Para que o TypeScript não reclame em tempo de compilação, você pode fazer uma
// afirmação de tipo (type assertion) ou estender a classe com a propriedade.
console.log(`Serviço criado em: ${meuServico.criadoEm}`);
// Decorator de Propriedade: Pode ser usado para modificar o comportamento de uma propriedade
// (Exemplo mais complexo, apenas para conhecimento, não entraremos em detalhes agora)
function PropriedadeSomenteLeitura(target, propertyKey) {
    let value = target[propertyKey]; // Valor inicial
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        console.warn(`[PropriedadeSomenteLeitura] Tentativa de modificar propriedade somente leitura: ${propertyKey}`);
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
    constructor() {
        this.versao = '1.0.0'; // Note que 'readonly' já faz isso em TS nativamente
        // this.versao = "2.0.0"; // ERRO em tempo de compilação por 'readonly'
    }
}
__decorate([
    PropriedadeSomenteLeitura,
    __metadata("design:type", String)
], Configuracao.prototype, "versao", void 0);
const conf = new Configuracao();
console.log(`Versão da configuração: ${conf.versao}`);
// conf.versao = "2.0.0"; // Em JS puro, sem 'readonly', o decorator de propriedade faria o trabalho
// Mas com 'readonly' no TS, já é barrado em compilação.
// O decorator é mais útil para adicionar comportamento em runtime.
