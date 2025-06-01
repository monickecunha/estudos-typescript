// --- 3. Generics (Genéricos) ---
// Permitem criar componentes reutilizáveis que funcionam com qualquer tipo.
// Usamos <T> (ou outro nome, como <U>, <K>, <V>) como um "placeholder" para um tipo.

// Exemplo: Função que retorna o que recebe, mas mantém o tipo de entrada
function identidade<T>(arg: T): T {
    return arg;
}

let numIdentidade = identidade(10); // T é inferido como number
let stringIdentidade = identidade('Olá'); // T é inferido como string
let booleanIdentidade = identidade(true); // T é inferido como boolean

console.log(`Identidade Numérica: ${numIdentidade}`);
console.log(`Identidade String: ${stringIdentidade}`);
console.log(`Identidade Boolean: ${booleanIdentidade}`);

// Exemplo: Classe Genérica para armazenar itens de um tipo específico
class Caixa<T> {
    conteudo: T[] = [];

    adicionar(item: T): void {
        this.conteudo.push(item);
    }

    obterPrimeiro(): T | undefined {
        return this.conteudo.length > 0 ? this.conteudo[0] : undefined;
    }
}

const caixaDeNumeros = new Caixa<number>();
caixaDeNumeros.adicionar(1);
caixaDeNumeros.adicionar(2);
// caixaDeNumeros.adicionar("texto"); // ERRO: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
console.log(`Primeiro número da caixa: ${caixaDeNumeros.obterPrimeiro()}`);

const caixaDeStrings = new Caixa<string>();
caixaDeStrings.adicionar('Maçã');
caixaDeStrings.adicionar('Banana');
console.log(`Primeira fruta da caixa: ${caixaDeStrings.obterPrimeiro()}`);

// Exemplo: Interface Genérica
interface Par<K, V> {
    key: K;
    value: V;
}

let meuPar: Par<string, number> = { key: 'idade', value: 30 };
console.log(`Meu par: ${meuPar.key} - ${meuPar.value}`);

console.log('\n--- Fim dos Exemplos de Generics ---');
