"use strict";
// --- Arrays ---
// Para tipar arrays, você pode usar 'Tipo[]' ou 'Array<Tipo>'
// Array de strings
let listaDeNomes = ['Alice', 'Bob', 'Charlie'];
// listaDeNomes.push(123); // ERRO: Argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
// Array de números
let idadesDosUsuarios = [25, 30, 22, 40];
// Array de booleans
let statusConcluido = [true, false, true];
// Usando a sintaxe Array<Tipo>
let produtos = ['Banana', 'Maçã', 'Pêra'];
// Array com múltiplos tipos (usando Union Type)
let itensDiversos = ['caneta', 5, 'caderno', 10];
// --- Tuplas ---
// Tuplas são arrays com um número fixo de elementos, onde cada elemento tem um tipo conhecido e fixo.
// A ordem dos tipos importa!
// Exemplo: uma tupla que representa um par [nome, idade]
let pessoa1 = ['Carlos', 35];
// let pessoa2: [string, number] = [40, "Maria"]; // ERRO: Tipo 'number' não é atribuível ao tipo 'string'.
// let pessoa3: [string, number] = ["Ana", 28, true]; // ERRO: Tipo '[string, number, boolean]' não é atribuível ao tipo '[string, number]'.
// Exemplo: uma tupla para um código RGB
let corRGB = [255, 0, 128];
// --- Tipagem de Objetos ---
// Você pode definir a estrutura de um objeto com propriedades e seus tipos.
// Forma 1: Usando tipo literal (diretamente no objeto)
let usuario = {
    id: 1,
    nome: 'Fernanda',
    email: 'fernanda@example.com',
    ativo: true, // 'ativo' é opcional (com '?'), então pode ou não estar presente
};
let produtoLoja = {
    nome: 'Teclado Mecânico',
    preco: 450.0,
    disponivel: true,
};
let aluno = {
    nome: 'Lucas',
    idade: 20,
};
let professor = {
    nome: 'Mariana',
    idade: 45,
    cidade: 'São Paulo',
};
// --- Union Types ---
// Permitem que uma variável ou parâmetro tenha um dos vários tipos possíveis.
// Use o caractere '|' (pipe) para separar os tipos.
let idDoItem;
idDoItem = 'abc-123';
idDoItem = 456;
// idDoItem = true; // ERRO: Tipo 'boolean' não é atribuível ao tipo 'string | number'.
function imprimirID(id) {
    console.log(`O ID é: ${id}`);
    // Você pode precisar verificar o tipo em runtime para usar métodos específicos
    if (typeof id === 'string') {
        console.log(`ID em maiúsculas: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID multiplicado por 2: ${id * 2}`);
    }
}
imprimirID('produtoX');
imprimirID(987);
let pontoA = [10, 20];
let pontoB = [150, 80];
let statusAtual = 'processando';
function processarDados(dados, callback) {
    console.log('Processando:', dados);
    callback(dados.toUpperCase());
}
processarDados('informacao', (resultado) => {
    console.log('Callback executado com:', resultado);
});
console.log('\n--- Checando Tipos (02-colecoes-e-objetos.ts) ---');
console.log('Lista de Nomes:', listaDeNomes);
console.log('Pessoa 1:', pessoa1);
console.log('Usuário:', usuario);
console.log('Aluno:', aluno);
console.log('Status Atual:', statusAtual);
console.log('Ponto A:', pontoA);
// IMPORTANTE:
// Para testar este arquivo específico, você precisará compilar apenas ele, ou configurar seu tsconfig.json para incluir todos os arquivos .ts.
// Para compilar APENAS este arquivo:
// npx tsc 02-colecoes-e-objetos.ts --outDir ./dist
// E depois executar:
// node dist/02-colecoes-e-objetos.js
// Se você quiser que 'npx tsc' (sem nome do arquivo) compile tudo:
// Certifique-se que no seu tsconfig.json você tem:
// "include": ["./*.ts"] ou "include": ["**/*.ts"]
// E "outDir": "./dist"
