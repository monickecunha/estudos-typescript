"use strict";
// --- 6. Nullish Coalescing (??) e Optional Chaining (?.) ---
// Operadores modernos do JavaScript muito úteis em TypeScript.
var _a, _b, _c;
let usuario1 = {
    nome: 'Ana',
};
let usuario2 = {
    nome: 'Bruno',
    endereco: { rua: 'Rua A' },
};
let usuario3 = {
    nome: 'Carla',
    endereco: { rua: 'Rua B', numero: 123 },
    telefones: ['111-222'],
};
// Sem optional chaining, teríamos que fazer verificações com '&&'
// console.log(usuario1 && usuario1.endereco && usuario1.endereco.rua);
// Com optional chaining:
console.log(`Rua do Usuário 1: ${(_a = usuario1 === null || usuario1 === void 0 ? void 0 : usuario1.endereco) === null || _a === void 0 ? void 0 : _a.rua}`); // Saída: Rua do Usuário 1: undefined
console.log(`Número do Usuário 2: ${(_b = usuario2 === null || usuario2 === void 0 ? void 0 : usuario2.endereco) === null || _b === void 0 ? void 0 : _b.numero}`); // Saída: Número do Usuário 2: undefined
console.log(`Telefone do Usuário 3: ${(_c = usuario3 === null || usuario3 === void 0 ? void 0 : usuario3.telefones) === null || _c === void 0 ? void 0 : _c[0]}`); // Saída: Telefone do Usuário 3: 111-222
// Nullish Coalescing (??)
// Retorna o operando do lado direito se o operando do lado esquerdo for 'null' ou 'undefined'.
// Diferente de '||' (OR lógico), que retorna o lado direito se o esquerdo for falsy (0, '', false, null, undefined).
let valorPadrao = null;
let resultadoNullish = valorPadrao !== null && valorPadrao !== void 0 ? valorPadrao : 100; // Se valorPadrao é null ou undefined, use 100
console.log(`Resultado Nullish (null): ${resultadoNullish}`); // Saída: Resultado Nullish (null): 100
let valorZero = 0;
let resultadoNullishZero = valorZero !== null && valorZero !== void 0 ? valorZero : 200; // 0 NÃO é nullish, então usa 0
console.log(`Resultado Nullish (0): ${resultadoNullishZero}`); // Saída: Resultado Nullish (0): 0
let resultadoORZero = valorZero || 200; // 0 é falsy, então usa 200
console.log(`Resultado OR (0): ${resultadoORZero}`); // Saída: Resultado OR (0): 200
let nomeUsuarioBanco = null;
let nomeExibicao = nomeUsuarioBanco !== null && nomeUsuarioBanco !== void 0 ? nomeUsuarioBanco : 'Visitante';
console.log(`Nome de Exibição: ${nomeExibicao}`); // Saída: Nome de Exibição: Visitante
let nomeUsuarioComum = 'Maria';
let nomeExibicao2 = nomeUsuarioComum !== null && nomeUsuarioComum !== void 0 ? nomeUsuarioComum : 'Visitante';
console.log(`Nome de Exibição 2: ${nomeExibicao2}`); // Saída: Nome de Exibição 2: Maria
console.log('\n--- Fim dos Exemplos de Nullish Coalescing e Optional Chaining ---');
