// --- 6. Nullish Coalescing (??) e Optional Chaining (?.) ---
// Operadores modernos do JavaScript muito úteis em TypeScript.

// Optional Chaining (?.)
// Acessa propriedades aninhadas de forma segura. Se algo no caminho for null ou undefined, retorna undefined.

type UsuarioLogado = {
    nome: string;
    endereco?: {
        // 'endereco' pode ser opcional
        rua: string;
        numero?: number; // 'numero' pode ser opcional
    };
    telefones?: string[]; // 'telefones' pode ser opcional
};

let usuario1: UsuarioLogado = {
    nome: 'Ana',
};

let usuario2: UsuarioLogado = {
    nome: 'Bruno',
    endereco: { rua: 'Rua A' },
};

let usuario3: UsuarioLogado = {
    nome: 'Carla',
    endereco: { rua: 'Rua B', numero: 123 },
    telefones: ['111-222'],
};

// Sem optional chaining, teríamos que fazer verificações com '&&'
// console.log(usuario1 && usuario1.endereco && usuario1.endereco.rua);

// Com optional chaining:
console.log(`Rua do Usuário 1: ${usuario1?.endereco?.rua}`); // Saída: Rua do Usuário 1: undefined
console.log(`Número do Usuário 2: ${usuario2?.endereco?.numero}`); // Saída: Número do Usuário 2: undefined
console.log(`Telefone do Usuário 3: ${usuario3?.telefones?.[0]}`); // Saída: Telefone do Usuário 3: 111-222

// Nullish Coalescing (??)
// Retorna o operando do lado direito se o operando do lado esquerdo for 'null' ou 'undefined'.
// Diferente de '||' (OR lógico), que retorna o lado direito se o esquerdo for falsy (0, '', false, null, undefined).

let valorPadrao: number | null = null;
let resultadoNullish = valorPadrao ?? 100; // Se valorPadrao é null ou undefined, use 100
console.log(`Resultado Nullish (null): ${resultadoNullish}`); // Saída: Resultado Nullish (null): 100

let valorZero: number = 0;
let resultadoNullishZero = valorZero ?? 200; // 0 NÃO é nullish, então usa 0
console.log(`Resultado Nullish (0): ${resultadoNullishZero}`); // Saída: Resultado Nullish (0): 0

let resultadoORZero = valorZero || 200; // 0 é falsy, então usa 200
console.log(`Resultado OR (0): ${resultadoORZero}`); // Saída: Resultado OR (0): 200

let nomeUsuarioBanco: string | null = null;
let nomeExibicao = nomeUsuarioBanco ?? 'Visitante';
console.log(`Nome de Exibição: ${nomeExibicao}`); // Saída: Nome de Exibição: Visitante

let nomeUsuarioComum: string = 'Maria';
let nomeExibicao2 = nomeUsuarioComum ?? 'Visitante';
console.log(`Nome de Exibição 2: ${nomeExibicao2}`); // Saída: Nome de Exibição 2: Maria

console.log('\n--- Fim dos Exemplos de Nullish Coalescing e Optional Chaining ---');
