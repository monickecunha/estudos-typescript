// --- Interfaces ---
// Interfaces definem a "forma" que um objeto deve ter, ou um "contrato" que uma classe deve seguir.
// Elas não contêm implementação, apenas a definição.

// Interface para um objeto
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    ligar(): void; // Método que a classe deve ter
    acelerar?(velocidade: number): void; // Método opcional (com '?')
}

// Interface para uma função (descreve a "assinatura" da função)
interface CalculadoraFuncao {
    (num1: number, num2: number): number; // Recebe dois números, retorna um número
}

// Implementando uma interface em uma classe
class MeuCarro implements Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar(): void {
        console.log(`${this.modelo} (${this.marca}) ligou.`);
    }

    acelerar(velocidade: number): void {
        console.log(`${this.modelo} acelerando para ${velocidade} km/h.`);
    }
}

const fusca = new MeuCarro('VW', 'Fusca', 1970);
fusca.ligar();
fusca.acelerar(80);

// Usando a interface para uma função
const somar: CalculadoraFuncao = (a, b) => a + b;
const subtrair: CalculadoraFuncao = (a, b) => a - b;

console.log(`10 + 5 = ${somar(10, 5)}`);
console.log(`10 - 5 = ${subtrair(10, 5)}`);

// Interfaces também podem estender outras interfaces
interface VeiculoTerrestre extends Carro {
    rodas: number;
}

class Moto implements VeiculoTerrestre {
    marca: string;
    modelo: string;
    ano: number;
    rodas: number = 2;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar(): void {
        console.log(`${this.modelo} (${this.marca}) ligou o motor da moto.`);
    }
}

const honda = new Moto('Honda', 'CBR500R', 2023);
honda.ligar();
console.log(`Rodas da moto: ${honda.rodas}`);
