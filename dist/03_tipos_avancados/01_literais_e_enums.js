"use strict";
// --- 1. Tipos Literais ---
// Tipos literais permitem que você defina uma variável para aceitar apenas valores específicos.
let statusTransacao = 'sucesso';
statusTransacao = 'pendente';
let numeroSelecionado = 4;
// numeroSelecionado = 5; // ERRO: Tipo '5' não é atribuível ao tipo 'NumerosParesPequenos'.
// --- 2. Enums ---
// Enums são conjuntos de constantes nomeadas. Podem ser numéricos ou de string.
// Enum numérico (valores padrão começam de 0)
var Direcao;
(function (Direcao) {
    Direcao[Direcao["Norte"] = 0] = "Norte";
    Direcao[Direcao["Leste"] = 1] = "Leste";
    Direcao[Direcao["Sul"] = 2] = "Sul";
    Direcao[Direcao["Oeste"] = 3] = "Oeste";
})(Direcao || (Direcao = {}));
let direcaoAtual = Direcao.Norte;
console.log(`Direção atual: ${direcaoAtual} (${Direcao[direcaoAtual]})`); // Saída: Direção atual: 0 (Norte)
// Enum numérico com valores definidos
var CodigoErro;
(function (CodigoErro) {
    CodigoErro[CodigoErro["BadRequest"] = 400] = "BadRequest";
    CodigoErro[CodigoErro["Unauthorized"] = 401] = "Unauthorized";
    CodigoErro[CodigoErro["NotFound"] = 404] = "NotFound";
    CodigoErro[CodigoErro["InternalServerError"] = 500] = "InternalServerError";
})(CodigoErro || (CodigoErro = {}));
let erroHttp = CodigoErro.NotFound;
console.log(`Erro HTTP: ${erroHttp}`); // Saída: Erro HTTP: 404
// Enum de string (mais legível em muitos casos)
var StatusTarefa;
(function (StatusTarefa) {
    StatusTarefa["Pendente"] = "PENDENTE";
    StatusTarefa["EmAndamento"] = "EM_ANDAMENTO";
    StatusTarefa["Concluida"] = "CONCLUIDA";
    StatusTarefa["Cancelada"] = "CANCELADA";
})(StatusTarefa || (StatusTarefa = {}));
let tarefa1Status = StatusTarefa.EmAndamento;
console.log(`Status da tarefa: ${tarefa1Status}`); // Saída: Status da tarefa: EM_ANDAMENTO
console.log('\n--- Fim dos Exemplos de Literais e Enums ---');
