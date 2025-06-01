"use strict";
// --- 4. Type Assertions (afirmações de tipo) ---
// Você diz ao TypeScript que você "sabe" o tipo de um valor. Não é uma conversão em runtime.
// Use 'as Tipo' ou '<Tipo>valor' (evitar a segunda forma com JSX/React)
let algumaCoisa = 'isso é uma string';
// let comprimento: number = algumaCoisa.length; // Pode ser um erro se 'algumaCoisa' não for string.
// Para dizer ao TS que você sabe que é uma string:
let comprimentoString = algumaCoisa.length;
console.log(`Comprimento da string (assertion): ${comprimentoString}`);
// Exemplo com HTMLElement (simulando um cenário de DOM)
// Suponha que você tem um elemento input em seu HTML: <input id="meuInput" type="text">
// Em um ambiente de navegador, document.getElementById retorna HTMLElement | null.
// Para acessar propriedades específicas de input (como 'value'), precisamos de type assertion.
// O 'as HTMLInputElement' diz ao TS: "Confie em mim, este elemento é um input HTML."
// const inputElement = document.getElementById("meuInput") as HTMLInputElement;
// if (inputElement) { // Verifica se o elemento não é null antes de usar
//    console.log(inputElement.value);
// }
// --- 5. Type Guards (guardas de tipo) ---
// Permitem estreitar o tipo de uma variável dentro de um bloco condicional.
function processarValor(valor) {
    if (typeof valor === 'string') {
        // Type Guard: dentro deste if, 'valor' é garantidamente 'string'
        console.log(`Valor é uma string: ${valor.toUpperCase()}`);
    }
    else {
        // Dentro deste else, 'valor' é garantidamente 'number'
        console.log(`Valor é um número: ${valor * 2}`);
    }
}
processarValor('hello world');
processarValor(123);
// Type Guard com 'instanceof' para classes
class Pato {
    nadar() {
        console.log('Pato nadando...');
    }
}
class Peixe {
    nadar() {
        console.log('Peixe nadando...');
    }
    respirarNaAgua() {
        console.log('Peixe respirando na água...');
    }
}
function moverNadador(nadador) {
    nadador.nadar();
    if (nadador instanceof Peixe) {
        // Type Guard: 'nadador' é garantidamente um Peixe aqui
        nadador.respirarNaAgua();
    }
}
moverNadador(new Pato());
moverNadador(new Peixe());
// Função que verifica se um objeto é do tipo CachorroPet
function isCachorro(pet) {
    return pet.latir !== undefined;
}
function interagirComPet(pet) {
    if (isCachorro(pet)) {
        pet.latir();
    }
    else {
        pet.miar();
    }
}
class MeuCachorro {
    latir() {
        console.log('Au au!');
    }
}
class MeuGato {
    miar() {
        console.log('Miau!');
    }
}
interagirComPet(new MeuCachorro());
interagirComPet(new MeuGato());
console.log('\n--- Fim dos Exemplos de Type Assertions e Type Guards ---');
