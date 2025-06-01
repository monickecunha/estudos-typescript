import globals from "globals"; // Importa os globais (como variáveis de ambiente de navegador ou Node.js)
import pluginJs from "@eslint/js"; // Importa o plugin de regras JavaScript padrão do ESLint
import tseslint from "typescript-eslint"; // Importa o plugin e parser para TypeScript
import prettierPlugin from "eslint-plugin-prettier"; // Plugin que integra o Prettier como uma regra do ESLint
import prettierConfig from "eslint-config-prettier"; // Configuração que desliga regras do ESLint que conflitam com o Prettier


export default [ // A configuração agora é um array de objetos de configuração
  {
    // Esta seção configura as opções de linguagem e o parser
    languageOptions: {
      globals: globals.node, // Aqui você define o ambiente global. Para Node.js, use 'globals.node'. Se fosse para navegador, 'globals.browser'.
      parser: tseslint.parser, // Usa o parser do TypeScript para o ESLint
      parserOptions: {
        ecmaVersion: 2020, // Permite que o parser entenda recursos modernos do JavaScript (ES2020)
        sourceType: "module" // Indica que o código usa módulos ES (import/export)
      }
    },
    // Esta configuração será aplicada apenas aos arquivos que correspondem a este padrão
    files: ["src/**/*.ts"], // Aplica esta configuração a todos os arquivos .ts dentro da pasta 'src' e suas subpastas
    // Define os plugins que serão usados nesta configuração
    plugins: {
      typescript: tseslint.plugin, // O plugin para regras específicas de TypeScript
      prettier: prettierPlugin // O plugin do Prettier
    },
    // Define as regras a serem aplicadas
    rules: {
      // Espalha (spread) as regras recomendadas do ESLint para JavaScript
      ...pluginJs.configs.recommended.rules,
      // Espalha as regras recomendadas do plugin TypeScript-ESLint
      ...tseslint.configs.recommended.rules,
      // Espalha as regras do Prettier (garante que as regras de formatação do Prettier sejam aplicadas)
      ...prettierConfig.rules,
      // Adiciona uma regra específica do Prettier para reportar problemas de formatação como erros do ESLint
      "prettier/prettier": "error",
      // Exemplo de regras personalizadas que você pode adicionar ou modificar:
      // "no-console": "warn", // Avisa se encontrar console.log
      // "@typescript-eslint/explicit-module-boundary-types": "off" // Desabilita a exigência de tipagem explícita para funções exportadas
    }
  }
];