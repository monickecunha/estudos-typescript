// --- Tipos Primitivos ---

// string
let nome: string = 'Monicke';
// nome = 123; // Isso daria um erro de tipo!

// number (inclui inteiros e decimais)
let idade: number = 30;
let preco: number = 29.99;

// boolean
let estaAtivo: boolean = true;
let temDesconto: boolean = false;

// null e undefined (são tipos por si só no TS quando 'strictNullChecks' está ativado)
let nulo: null = null;
let indefinido: undefined = undefined;

// void (usado para funções que não retornam nada)
function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
}
exibirMensagem('Hello, world!');

// --- Tipos Especiais ---

// any (EVITAR! Desabilita a verificação de tipo. Use com muita cautela.)
let valorQualquer: any = 'posso ser string';
valorQualquer = 10;
valorQualquer = true;
// Não há erro, o TS não verifica o tipo de 'any'

// unknown (Mais seguro que 'any'. Você precisa verificar o tipo antes de usar.)
let valorDesconhecido: unknown = 'alguma coisa';
// let outroValor: string = valorDesconhecido; // ERRO: Não é possível atribuir 'unknown' diretamente para 'string'
if (typeof valorDesconhecido === 'string') {
    let outroValor: string = valorDesconhecido; // Agora funciona!
    console.log('Valor desconhecido é uma string:', outroValor.toUpperCase());
}

// never (usado para funções que nunca retornam, ex: lançam um erro ou entram em loop infinito)
function erro(mensagem: string): never {
    throw new Error(mensagem);
}
// erro("Isso é um erro!"); // Esta linha nunca será alcançada

// --- Inferência de Tipos ---
// O TypeScript muitas vezes pode descobrir o tipo por conta própria.
let meuNome = 'João'; // TS infere: meuNome é string
let minhaIdade = 25; // TS infere: minhaIdade é number
let isLogged = true; // TS infere: isLogged é boolean

// A boa prática é deixar o TS inferir quando óbvio, e tipar explicitamente quando não.

// Teste você mesmo:
// Tente atribuir um tipo diferente a uma variável que o TS inferiu.
// Por exemplo: meuNome = 123; -> Veja o erro que aparece!

console.log({ nome, idade, preco, estaAtivo, nulo, indefinido, valorQualquer });
