"use strict";
// --- Interfaces ---
// Interfaces definem a "forma" que um objeto deve ter, ou um "contrato" que uma classe deve seguir.
// Elas não contêm implementação, apenas a definição.
// Implementando uma interface em uma classe
class MeuCarro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar() {
        console.log(`${this.modelo} (${this.marca}) ligou.`);
    }
    acelerar(velocidade) {
        console.log(`${this.modelo} acelerando para ${velocidade} km/h.`);
    }
}
const fusca = new MeuCarro('VW', 'Fusca', 1970);
fusca.ligar();
fusca.acelerar(80);
// Usando a interface para uma função
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
console.log(`10 + 5 = ${somar(10, 5)}`);
console.log(`10 - 5 = ${subtrair(10, 5)}`);
class Moto {
    constructor(marca, modelo, ano) {
        this.rodas = 2;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar() {
        console.log(`${this.modelo} (${this.marca}) ligou o motor da moto.`);
    }
}
const honda = new Moto('Honda', 'CBR500R', 2023);
honda.ligar();
console.log(`Rodas da moto: ${honda.rodas}`);
