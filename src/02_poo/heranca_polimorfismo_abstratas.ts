// Importar a classe Animal do arquivo classes.ts
import { Animal } from './classes';
// --- 2. Herança (extends) ---
// Uma classe pode herdar propriedades e métodos de outra classe.

class Cachorro extends Animal {
    public raca: string;

    constructor(nome: string, idade: number, raca: string) {
        // 'super()' chama o construtor da classe pai (Animal)
        super(nome, idade, 'Cachorro'); // A espécie "Cachorro" é fixada aqui
        this.raca = raca;
    }

    // Sobrescrevendo um método da classe pai
    public fazerBarulho(): void {
        console.log(`${this.nome} (${this.raca}) está latindo: Au au!`);
    }

    public protegerCasa(): void {
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
function apresentarAnimal(animal: Animal): void {
    console.log(`Olá, meu nome é ${animal.nome}.`);
    animal.fazerBarulho(); // Chama o método 'fazerBarulho' que pode ter implementações diferentes
}

const meuGato = new Animal('Miau', 2, 'Gato');
const meuPato = new Animal('Donald', 1, 'Pato');

// Reutilizando 'poodle' de Herança
apresentarAnimal(poodle);
apresentarAnimal(meuGato);
apresentarAnimal(meuPato);

// --- 5. Classes Abstratas ---
// Classes abstratas não podem ser instanciadas diretamente. Elas servem como um "projeto" para outras classes.
// Podem conter métodos abstratos (sem implementação) que devem ser implementados pelas classes filhas.

abstract class FormaGeometrica {
    constructor(public cor: string) {}

    // Método abstrato: deve ser implementado pelas classes filhas
    abstract calcularArea(): number;

    // Método concreto: pode ser implementado ou não pelas classes filhas
    desenhar(): void {
        console.log(`Desenhando uma forma geométrica de cor ${this.cor}.`);
    }
}

class Circulo extends FormaGeometrica {
    constructor(
        cor: string,
        public raio: number
    ) {
        super(cor);
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends FormaGeometrica {
    constructor(
        cor: string,
        public largura: number,
        public altura: number
    ) {
        super(cor);
    }

    calcularArea(): number {
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
