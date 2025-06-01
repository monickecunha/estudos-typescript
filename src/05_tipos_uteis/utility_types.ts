// --- Utilitários de Tipos (Utility Types) ---
// Funções de transformação de tipos fornecidas pelo TypeScript.

interface UsuarioOriginal {
  id: number;
  nome: string;
  email: string;
  idade?: number; // Propriedade opcional
  ativo: boolean;
}

// 1. Partial<T>
// Converte todas as propriedades de um tipo T em opcionais.
type UsuarioParcial = Partial<UsuarioOriginal>;

const usuarioDraft: UsuarioParcial = {
  nome: "João", // id, email, idade, ativo são opcionais agora
};
console.log("\n--- Partial<T> ---");
console.log("UsuarioParcial:", usuarioDraft);


// 2. Required<T>
// Converte todas as propriedades de um tipo T em obrigatórias.
type UsuarioCompleto = Required<UsuarioOriginal>;

// const usuarioFaltando: UsuarioCompleto = { nome: "Maria" }; // ERRO: Propriedades id, email, ativo faltam
const usuarioOk: UsuarioCompleto = {
  id: 1,
  nome: "Maria",
  email: "maria@example.com",
  idade: 30,
  ativo: true
};
console.log("\n--- Required<T> ---");
console.log("UsuarioCompleto:", usuarioOk);


// 3. Readonly<T>
// Converte todas as propriedades de um tipo T em somente leitura.
type UsuarioImutavel = Readonly<UsuarioOriginal>;

const usuarioImutavel: UsuarioImutavel = {
  id: 2,
  nome: "Pedro",
  email: "pedro@example.com",
  ativo: false
};
// usuarioImutavel.nome = "Novo Nome"; // ERRO: Não pode atribuir a 'nome' porque é uma propriedade somente leitura.
console.log("\n--- Readonly<T> ---");
console.log("UsuarioImutavel:", usuarioImutavel);


// 4. Pick<T, K>
// Cria um novo tipo selecionando um conjunto de propriedades K de um tipo T.
type UsuarioPreview = Pick<UsuarioOriginal, 'id' | 'nome'>;

const preview: UsuarioPreview = {
  id: 3,
  nome: "Ana"
};
// const previewErro: UsuarioPreview = { id: 3, email: "a@b.com" }; // ERRO: 'email' não existe no tipo 'UsuarioPreview'
console.log("\n--- Pick<T, K> ---");
console.log("UsuarioPreview:", preview);


// 5. Omit<T, K>
// Cria um novo tipo removendo um conjunto de propriedades K de um tipo T.
type UsuarioSemIdEmail = Omit<UsuarioOriginal, 'id' | 'email'>;

const usuarioMenosCampos: UsuarioSemIdEmail = {
  nome: "Carlos",
  idade: 40,
  ativo: true
};
console.log("\n--- Omit<T, K> ---");
console.log("UsuarioSemIdEmail:", usuarioMenosCampos);


// 6. Exclude<UnionType, ExcludedMembers>
// Constrói um tipo excluindo do UnionType todos os membros que são atribuíveis a ExcludedMembers.
type EventosUI = 'click' | 'hover' | 'keypress' | 'mousedown';
type EventosMouse = Exclude<EventosUI, 'keypress'>; // 'click' | 'hover' | 'mousedown'

let meuEvento: EventosMouse = 'click';
// meuEvento = 'keypress'; // ERRO: Tipo '"keypress"' não é atribuível ao tipo 'EventosMouse'.
console.log("\n--- Exclude<T, K> ---");
console.log("EventosMouse:", meuEvento);


// 7. Extract<Type, Union>
// Constrói um tipo extraindo do Type todos os membros que são atribuíveis a Union.
type Animais = 'cachorro' | 'gato' | 'peixe' | 'cobra';
type AnimaisDomesticos = Extract<Animais, 'cachorro' | 'gato'>; // 'cachorro' | 'gato'

let meuAnimal: AnimaisDomesticos = 'gato';
// meuAnimal = 'peixe'; // ERRO: Tipo '"peixe"' não é atribuível ao tipo 'AnimaisDomesticos'.
console.log("\n--- Extract<T, U> ---");
console.log("AnimaisDomesticos:", meuAnimal);


// 8. NonNullable<T>
// Constrói um tipo excluindo 'null' e 'undefined' de T.
type PossivelNulo = string | null | undefined;
type NaoNulo = NonNullable<PossivelNulo>; // string

let texto: NaoNulo = "Olá";
// let textoNulo: NaoNulo = null; // ERRO: Tipo 'null' não é atribuível ao tipo 'string'.
console.log("\n--- NonNullable<T> ---");
console.log("NaoNulo (valor):", texto);


// 9. Record<K, T>
// Constrói um tipo de objeto cujas chaves são do tipo K e cujos valores são do tipo T.
type CategoriaProdutos = 'eletronicos' | 'roupas' | 'alimentos';
type Inventario = Record<CategoriaProdutos, number>; // { eletronicos: number; roupas: number; alimentos: number; }

const estoque: Inventario = {
  eletronicos: 100,
  roupas: 50,
  alimentos: 200
};
console.log("\n--- Record<K, T> ---");
console.log("Inventario:", estoque);


// 10. Parameters<T>
// Extrai os tipos dos parâmetros de uma função T em uma tupla.
function saudacao(nome: string, idade: number): string {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

type ParametrosSaudacao = Parameters<typeof saudacao>; // [nome: string, idade: number]

const meusParametros: ParametrosSaudacao = ["Alice", 25];
console.log("\n--- Parameters<T> ---");
console.log("ParametrosSaudacao:", meusParametros);


// 11. ReturnType<T>
// Extrai o tipo de retorno de uma função T.
type RetornoSaudacao = ReturnType<typeof saudacao>; // string

let mensagem: RetornoSaudacao = "Bem-vindo!";
console.log("\n--- ReturnType<T> ---");
console.log("RetornoSaudacao (valor):", mensagem);


console.log("\n--- Fim dos Exemplos de Utilitários de Tipos ---");