"use strict";
// --- 1. Módulos (import e export) ---
// Módulos permitem dividir seu código em arquivos separados, facilitando a organização,
// a reutilização e o controle de dependências.
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_NOME = exports.Matematica = void 0;
// Para demonstrar import/export, imagine que temos a seguinte classe em um arquivo SEPARADO.
// VAMOS SIMULAR AQUI COMO SE FOSSE IMPORTADO DE OUTRO ARQUIVO (ex: 'utils/matematica.ts')
// No entanto, para a compilação única deste arquivo, manteremos a definição aqui.
// Em um projeto real, 'matematica.ts' teria 'export class Matematica { ... }'
// E 'modulos_e_decorators.ts' teria 'import { Matematica } from "./utils/matematica";'
class Matematica {
    static somar(a, b) {
        return a + b;
    }
    static subtrair(a, b) {
        return a - b;
    }
}
exports.Matematica = Matematica;
// Exemplo de exportação de uma constante
exports.APP_NOME = 'MinhaAppTS';
// Exemplo de exportação padrão (default export) - apenas um por arquivo
// Você pode importar isso com qualquer nome: import MinhaClasse from './caminho';
class ConfiguracaoPadrao {
    constructor() {
        this.ambiente = 'desenvolvimento';
        this.debug = true;
    }
}
exports.default = ConfiguracaoPadrao;
console.log('\n--- Exemplo de Módulos (usando exports internos neste arquivo) ---');
console.log(`Soma: ${Matematica.somar(5, 3)}`);
console.log(`Nome da aplicação: ${exports.APP_NOME}`);
const confPadrao = new ConfiguracaoPadrao();
console.log(`Ambiente padrão: ${confPadrao.ambiente}`);
