"use strict";
// --- Utilitários de Tipos (Utility Types) ---
// Funções de transformação de tipos fornecidas pelo TypeScript.
const usuarioDraft = {
    nome: "João", // id, email, idade, ativo são opcionais agora
};
console.log("\n--- Partial<T> ---");
console.log("UsuarioParcial:", usuarioDraft);
// const usuarioFaltando: UsuarioCompleto = { nome: "Maria" }; // ERRO: Propriedades id, email, ativo faltam
const usuarioOk = {
    id: 1,
    nome: "Maria",
    email: "maria@example.com",
    idade: 30,
    ativo: true
};
console.log("\n--- Required<T> ---");
console.log("UsuarioCompleto:", usuarioOk);
const usuarioImutavel = {
    id: 2,
    nome: "Pedro",
    email: "pedro@example.com",
    ativo: false
};
// usuarioImutavel.nome = "Novo Nome"; // ERRO: Não pode atribuir a 'nome' porque é uma propriedade somente leitura.
console.log("\n--- Readonly<T> ---");
console.log("UsuarioImutavel:", usuarioImutavel);
const preview = {
    id: 3,
    nome: "Ana"
};
// const previewErro: UsuarioPreview = { id: 3, email: "a@b.com" }; // ERRO: 'email' não existe no tipo 'UsuarioPreview'
console.log("\n--- Pick<T, K> ---");
console.log("UsuarioPreview:", preview);
const usuarioMenosCampos = {
    nome: "Carlos",
    idade: 40,
    ativo: true
};
console.log("\n--- Omit<T, K> ---");
console.log("UsuarioSemIdEmail:", usuarioMenosCampos);
let meuEvento = 'click';
// meuEvento = 'keypress'; // ERRO: Tipo '"keypress"' não é atribuível ao tipo 'EventosMouse'.
console.log("\n--- Exclude<T, K> ---");
console.log("EventosMouse:", meuEvento);
let meuAnimal = 'gato';
// meuAnimal = 'peixe'; // ERRO: Tipo '"peixe"' não é atribuível ao tipo 'AnimaisDomesticos'.
console.log("\n--- Extract<T, U> ---");
console.log("AnimaisDomesticos:", meuAnimal);
let texto = "Olá";
// let textoNulo: NaoNulo = null; // ERRO: Tipo 'null' não é atribuível ao tipo 'string'.
console.log("\n--- NonNullable<T> ---");
console.log("NaoNulo (valor):", texto);
const estoque = {
    eletronicos: 100,
    roupas: 50,
    alimentos: 200
};
console.log("\n--- Record<K, T> ---");
console.log("Inventario:", estoque);
// 10. Parameters<T>
// Extrai os tipos dos parâmetros de uma função T em uma tupla.
function saudacao(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}
const meusParametros = ["Alice", 25];
console.log("\n--- Parameters<T> ---");
console.log("ParametrosSaudacao:", meusParametros);
let mensagem = "Bem-vindo!";
console.log("\n--- ReturnType<T> ---");
console.log("RetornoSaudacao (valor):", mensagem);
console.log("\n--- Fim dos Exemplos de Utilitários de Tipos ---");
