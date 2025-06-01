// --- 1. Tipos Literais ---
// Tipos literais permitem que você defina uma variável para aceitar apenas valores específicos.

type ResultadoOperacao = 'sucesso' | 'erro' | 'pendente'; // Union Type de literais de string
let statusTransacao: ResultadoOperacao = 'sucesso';
statusTransacao = 'pendente';
// statusTransacao = "falha"; // ERRO: Tipo '"falha"' não é atribuível ao tipo 'ResultadoOperacao'.

type NumerosParesPequenos = 2 | 4 | 6; // Union Type de literais numéricos
let numeroSelecionado: NumerosParesPequenos = 4;
// numeroSelecionado = 5; // ERRO: Tipo '5' não é atribuível ao tipo 'NumerosParesPequenos'.

// --- 2. Enums ---
// Enums são conjuntos de constantes nomeadas. Podem ser numéricos ou de string.

// Enum numérico (valores padrão começam de 0)
enum Direcao {
    Norte, // 0
    Leste, // 1
    Sul, // 2
    Oeste, // 3
}

let direcaoAtual: Direcao = Direcao.Norte;
console.log(`Direção atual: ${direcaoAtual} (${Direcao[direcaoAtual]})`); // Saída: Direção atual: 0 (Norte)
// Enum numérico com valores definidos
enum CodigoErro {
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500,
}

let erroHttp: CodigoErro = CodigoErro.NotFound;
console.log(`Erro HTTP: ${erroHttp}`); // Saída: Erro HTTP: 404

// Enum de string (mais legível em muitos casos)
enum StatusTarefa {
    Pendente = 'PENDENTE',
    EmAndamento = 'EM_ANDAMENTO',
    Concluida = 'CONCLUIDA',
    Cancelada = 'CANCELADA',
}

let tarefa1Status: StatusTarefa = StatusTarefa.EmAndamento;
console.log(`Status da tarefa: ${tarefa1Status}`); // Saída: Status da tarefa: EM_ANDAMENTO

console.log('\n--- Fim dos Exemplos de Literais e Enums ---');
