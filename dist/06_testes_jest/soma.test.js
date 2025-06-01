"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = require("./soma");
// describe: Agrupa testes relacionados. O primeiro argumento é uma descrição.
describe('Funções de Operações Matemáticas', () => {
    // it ou test: Define um caso de teste individual. O primeiro argumento é uma descrição.
    it('deve somar dois números corretamente', () => {
        // expect: O valor que você quer testar.
        // .toBe(): Um "matcher" para verificar se o valor é estritamente igual (===).
        expect((0, soma_1.somar)(2, 3)).toBe(5);
        expect((0, soma_1.somar)(-1, 1)).toBe(0);
        expect((0, soma_1.somar)(0, 0)).toBe(0);
    });
    it('deve subtrair dois números corretamente', () => {
        expect((0, soma_1.subtrair)(5, 2)).toBe(3);
        expect((0, soma_1.subtrair)(10, 20)).toBe(-10);
    });
    it('deve multiplicar dois números corretamente', () => {
        expect((0, soma_1.multiplicar)(2, 4)).toBe(8);
        expect((0, soma_1.multiplicar)(5, 0)).toBe(0);
        expect((0, soma_1.multiplicar)(-2, 3)).toBe(-6);
    });
    it('deve dividir dois números corretamente', () => {
        expect((0, soma_1.dividir)(10, 2)).toBe(5);
        expect((0, soma_1.dividir)(7, 2)).toBe(3.5);
    });
    it('deve lançar um erro ao dividir por zero', () => {
        // .toThrow(): Matcher para verificar se uma função lança um erro.
        // Você pode passar a mensagem de erro esperada.
        expect(() => (0, soma_1.dividir)(10, 0)).toThrow("Não é possível dividir por zero.");
        expect(() => (0, soma_1.dividir)(5, 0)).toThrow(Error); // Ou apenas verificar se é um erro
    });
});
// Matchers comuns:
// .toEqual(): Para comparar objetos ou arrays (verifica valor, não referência).
// .toHaveBeenCalled(): Para verificar se uma função mock foi chamada.
// .not.toBe(): Para verificar se não é igual.
// .toBeNull(), .toBeUndefined(), .toBeDefined(), .toBeTruthy(), .toBeFalsy()
// .toContain(): Para verificar se um item está em um array.
// .toMatch(): Para verificar se uma string corresponde a uma expressão regular.
// --- Hooks de Teste (beforeEach, afterEach) ---
// beforeEach: Executa antes de CADA teste dentro do bloco 'describe'.
// afterEach: Executa depois de CADA teste dentro do bloco 'describe'.
// beforeAll: Executa UMA VEZ antes de TODOS os testes no bloco 'describe'.
// afterAll: Executa UMA VEZ depois de TODOS os testes no bloco 'describe'.
let contador = 0;
describe('Hooks de Teste', () => {
    beforeEach(() => {
        contador = 0; // Reseta o contador antes de cada teste
        console.log('  [beforeEach] Contador resetado para:', contador);
    });
    afterEach(() => {
        console.log('  [afterEach] Contador final:', contador);
    });
    it('deve incrementar o contador no primeiro teste', () => {
        contador++;
        expect(contador).toBe(1);
    });
    it('deve ter o contador resetado para o segundo teste', () => {
        expect(contador).toBe(0); // Será 0 por causa do beforeEach
        contador += 5;
        expect(contador).toBe(5);
    });
});
