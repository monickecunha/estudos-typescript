// --- 1. Classes ---
// Classes são "moldes" para criar objetos. Elas definem propriedades e métodos.

export class Animal {
    // Propriedades (atributos)
    // Modificadores de acesso:
    // public: Acessível de qualquer lugar (padrão se não especificado)
    // private: Acessível apenas dentro da própria classe
    // protected: Acessível dentro da própria classe e em classes que a estendem (herdam)
    public nome: string;
    private idade: number;
    protected especie: string;

    // Construtor: Chamado quando um novo objeto é criado
    constructor(nome: string, idade: number, especie: string) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
        console.log(`Animal ${this.nome} (${this.especie}) criado.`);
    }

    // Métodos (funções dentro da classe)
    public fazerBarulho(): void {
        console.log('Animal fazendo barulho...');
    }

    // Método para acessar propriedade privada
    public getIdade(): number {
        return this.idade;
    }
}

// Criando uma instância (objeto) da classe Animal
const meuCachorro = new Animal('Rex', 5, 'Cachorro');
meuCachorro.fazerBarulho();
console.log(`Nome do cachorro: ${meuCachorro.nome}`);
console.log(`Idade do cachorro: ${meuCachorro.getIdade()}`);
// console.log(meuCachorro.idade); // ERRO: 'idade' é private e não pode ser acessada diretamente

// Exemplo de uso de atalho no construtor para criar propriedades
class PessoaCurta {
    constructor(
        public nome: string,
        private _idade: number
    ) {
        // Public cria 'nome', Private cria '_idade'
        console.log(`Pessoa ${this.nome} criada.`);
    }

    get idade(): number {
        // Getter para a propriedade privada
        return this._idade;
    }

    set idade(novaIdade: number) {
        // Setter para a propriedade privada
        if (novaIdade > 0) {
            this._idade = novaIdade;
        }
    }
}

const joao = new PessoaCurta('João', 30);
console.log(`Nome da Pessoa: ${joao.nome}`);
console.log(`Idade da Pessoa: ${joao.idade}`);
joao.idade = 31; // Usando o setter
console.log(`Nova Idade: ${joao.idade}`);
