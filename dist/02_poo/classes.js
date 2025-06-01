"use strict";
// --- 1. Classes ---
// Classes são "moldes" para criar objetos. Elas definem propriedades e métodos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    // Construtor: Chamado quando um novo objeto é criado
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
        console.log(`Animal ${this.nome} (${this.especie}) criado.`);
    }
    // Métodos (funções dentro da classe)
    fazerBarulho() {
        console.log('Animal fazendo barulho...');
    }
    // Método para acessar propriedade privada
    getIdade() {
        return this.idade;
    }
}
exports.Animal = Animal;
// Criando uma instância (objeto) da classe Animal
const meuCachorro = new Animal('Rex', 5, 'Cachorro');
meuCachorro.fazerBarulho();
console.log(`Nome do cachorro: ${meuCachorro.nome}`);
console.log(`Idade do cachorro: ${meuCachorro.getIdade()}`);
// console.log(meuCachorro.idade); // ERRO: 'idade' é private e não pode ser acessada diretamente
// Exemplo de uso de atalho no construtor para criar propriedades
class PessoaCurta {
    constructor(nome, _idade) {
        this.nome = nome;
        this._idade = _idade;
        // Public cria 'nome', Private cria '_idade'
        console.log(`Pessoa ${this.nome} criada.`);
    }
    get idade() {
        // Getter para a propriedade privada
        return this._idade;
    }
    set idade(novaIdade) {
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
