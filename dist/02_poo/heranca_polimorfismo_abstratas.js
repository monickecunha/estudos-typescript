"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a classe Animal do arquivo classes.ts
const classes_1 = require("./classes");
// --- 2. Herança (extends) ---
// Uma classe pode herdar propriedades e métodos de outra classe.
class Cachorro extends classes_1.Animal {
    constructor(nome, idade, raca) {
        // 'super()' chama o construtor da classe pai (Animal)
        super(nome, idade, 'Cachorro'); // A espécie "Cachorro" é fixada aqui
        this.raca = raca;
    }
    // Sobrescrevendo um método da classe pai
    fazerBarulho() {
        console.log(`${this.nome} (${this.raca}) está latindo: Au au!`);
    }
    protegerCasa() {
        console.log(`${this.nome} está protegendo a casa.`);
        // console.log(this.idade); // ERRO: 'idade' é private na classe Animal
        console.log(`Espécie protegida: ${this.especie}`); // OK: 'especie' é protected
    }
}
const poodle = new Cachorro('Bobby', 3, 'Poodle');
poodle.fazerBarulho();
poodle.protegerCasa();
console.log(`Nome do poodle: ${poodle.nome}`);
// --- 4. Polimorfismo ---
// Significa "muitas formas". Objetos de classes diferentes podem ser tratados como objetos de um tipo comum (geralmente uma interface ou classe base).
// Usaremos a classe 'Animal' definida acima ou importada.
function apresentarAnimal(animal) {
    console.log(`Olá, meu nome é ${animal.nome}.`);
    animal.fazerBarulho(); // Chama o método 'fazerBarulho' que pode ter implementações diferentes
}
const meuGato = new classes_1.Animal('Miau', 2, 'Gato');
const meuPato = new classes_1.Animal('Donald', 1, 'Pato');
// Reutilizando 'poodle' de Herança
apresentarAnimal(poodle);
apresentarAnimal(meuGato);
apresentarAnimal(meuPato);
// --- 5. Classes Abstratas ---
// Classes abstratas não podem ser instanciadas diretamente. Elas servem como um "projeto" para outras classes.
// Podem conter métodos abstratos (sem implementação) que devem ser implementados pelas classes filhas.
class FormaGeometrica {
    constructor(cor) {
        this.cor = cor;
    }
    // Método concreto: pode ser implementado ou não pelas classes filhas
    desenhar() {
        console.log(`Desenhando uma forma geométrica de cor ${this.cor}.`);
    }
}
class Circulo extends FormaGeometrica {
    constructor(cor, raio) {
        super(cor);
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Retangulo extends FormaGeometrica {
    constructor(cor, largura, altura) {
        super(cor);
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
}
// const forma = new FormaGeometrica("preto"); // ERRO: Não é possível criar uma instância de uma classe abstrata.
const meuCirculo = new Circulo('Azul', 5);
meuCirculo.desenhar();
console.log(`Área do Círculo: ${meuCirculo.calcularArea().toFixed(2)}`);
const meuRetangulo = new Retangulo('Vermelho', 4, 6);
meuRetangulo.desenhar();
console.log(`Área do Retângulo: ${meuRetangulo.calcularArea()}`);
