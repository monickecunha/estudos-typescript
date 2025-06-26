# 📚 Estudos de TypeScript: Fundamentos, POO e Testes

---

Este repositório contém exemplos e exercícios práticos que explorei durante meus estudos de TypeScript, abrangendo desde os tipos de dados mais básicos até conceitos avançados de Programação Orientada a Objetos (POO), módulos e, finalmente, como testar código TypeScript usando Jest. O objetivo é solidificar o aprendizado e demonstrar a aplicação desses conceitos em código.

## 📁 Estrutura do Repositório

O projeto está organizado em pastas, cada uma focada em um conjunto específico de tópicos do TypeScript:

* `01_fundamentos/`: Contém arquivos que exploram os tipos de dados fundamentais do TypeScript, coleções (arrays, tuplas) e a tipagem de objetos.
* `02_poo/`: Dedicada aos conceitos de Programação Orientada a Objetos, como classes, herança, polimorfismo, classes abstratas e interfaces.
* `03_tipos_avancados/`: Mergulha em funcionalidades mais específicas e avançadas do TypeScript, como tipos literais, enums, generics, type assertions e type guards.
* `04_modulos_decorators/`: Explora a modularização de código e o uso de decorators (funcionalidade experimental).
* `05_tipos_uteis/`: Apresenta os utilitários de tipo (Utility Types) fornecidos pelo TypeScript para transformar e manipular tipos existentes.
* `06_testes_jest/`: Demonstra como escrever e executar testes unitários para código TypeScript usando a biblioteca Jest.

---

## 🚀 Como Executar os Exemplos

Para rodar os exemplos deste repositório, você precisará ter o **Node.js** e o **TypeScript** instalados globalmente em sua máquina. Para os testes, também será necessário o **Jest**.

1.  **Instale o Node.js:** Baixe e instale a versão LTS mais recente em [nodejs.org](https://nodejs.org/).
2.  **Instale o TypeScript:** Abra seu terminal ou prompt de comando e execute:
    ```bash
    npm install -g typescript
    ```
3.  **Instale o Jest (para a pasta de testes):**
    ```bash
    npm install --save-dev jest @types/jest ts-jest
    ```
    *Obs: Para configurar o Jest com TypeScript, geralmente você precisa de um arquivo `jest.config.js` na raiz do projeto ou configurações no `package.json`. No contexto desses exemplos, o `ts-node` é suficiente para rodar os arquivos `.ts` que não são de teste. Para os testes, siga as instruções específicas da seção `06_testes_jest/`.*

4.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/monickecunha/estudos-typescript.git](https://github.com/monickecunha/estudos-typescript.git)
    cd estudos-typescript
    ```

5.  **Navegue até a Pasta Desejada e Compile/Execute:**
    Cada arquivo `.ts` pode ser compilado e executado individualmente. Por exemplo:

    ```bash
    # Para 01_fundamentos/01-tipos-basicos.ts
    cd 01_fundamentos
    npx ts-node 01-tipos-basicos.ts
    # OU (compila para .js e depois executa)
    # npx tsc 01-tipos-basicos.ts
    # node 01-tipos-basicos.js

    # Para 06_testes_jest/ (para rodar os testes com Jest)
    cd 06_testes_jest
    npx jest
    ```
    * **Dica:** Se você não tem `ts-node` instalado globalmente (`npm install -g ts-node`), o comando `npx ts-node` tentará executá-lo. `ts-node` é muito útil para executar arquivos TypeScript diretamente sem a necessidade de compilação manual para `.js` primeiro.

---

## 📝 Detalhes das Pastas

### `01_fundamentos/`

Esta pasta explora os blocos de construção básicos do TypeScript:

* **`01-tipos-basicos.ts`**: Aborda os tipos primitivos (`string`, `number`, `boolean`, `null`, `undefined`, `void`), tipos especiais (`any`, `unknown`, `never`) e a inferência de tipos pelo TypeScript.
* **`02-colecoes-e-objetos.ts`**: Foca na tipagem de estruturas de dados mais complexas como **Arrays**, **Tuplas**, e a definição de tipos para **Objetos**. Também introduz **Union Types** e **Type Aliases**.

### `02_poo/`

Esta pasta detalha os pilares da Programação Orientada a Objetos em TypeScript:

* **`classes.ts`**: Demonstra a criação de classes, propriedades (com modificadores de acesso `public`, `private`, `protected`), construtores e métodos.
* **`heranca_polimorfismo_abstratas.ts`**: Ilustra como classes podem herdar de outras (`extends`), a sobrescrita de métodos, o conceito de **polimorfismo** e a implementação de **classes abstratas** e seus métodos.
* **`interfaces.ts`**: Explica o uso de **interfaces** para definir contratos de forma para objetos, classes (`implements`) e até mesmo para funções.

### `03_tipos_avancados/`

Esta pasta mergulha em funcionalidades mais específicas e avançadas do TypeScript:

* **`01_literais_e_enums.ts`**: Explora a utilização de **tipos literais** para restringir valores a um conjunto predefinido e a criação de **Enums** (numéricos e de string) para conjuntos de constantes nomeadas.
* **`02_generics.ts`**: Demonstra o poder dos **Generics**, permitindo a criação de componentes reutilizáveis que funcionam com diversos tipos, sem perder a segurança de tipo.
* **`03_type_assertions_guards.ts`**: Aborda as **Afirmações de Tipo (`as Type`)** para informar ao compilador sobre um tipo que você já conhece, e os **Guardas de Tipo (`typeof`, `instanceof`, e funções de guarda personalizadas)** para estreitar tipos em blocos condicionais.
* **`04_nullish_optional_chaining.ts`**: Apresenta os operadores **`Optional Chaining (?.)`** para acesso seguro a propriedades aninhadas e **`Nullish Coalescing (??)`** para fornecer valores padrão apenas para `null` ou `undefined`.

### `04_modulos_decorators/`

Esta pasta explora a organização e extensão de código:

* **`modulos.ts`**: Explica o conceito de **módulos** em TypeScript, demonstrando o uso de `import` e `export` para organizar o código em arquivos separados e reutilizáveis, incluindo `default export`.
* **`decorators.ts`**: Apresenta os **Decorators**, uma funcionalidade experimental que permite modificar ou estender classes, métodos e propriedades em tempo de design. **Nota:** Para usar decorators, `experimentalDecorators` e `emitDecoratorMetadata` precisam ser habilitados no `tsconfig.json`.

### `05_tipos_uteis/`

Esta pasta detalha as ferramentas de transformação de tipos embutidas no TypeScript:

* **`utility_types.ts`**: Contém exemplos práticos dos **Utility Types** mais comuns, como:
    * **`Partial<T>`**: Torna todas as propriedades opcionais.
    * **`Required<T>`**: Torna todas as propriedades obrigatórias.
    * **`Readonly<T>`**: Torna todas as propriedades somente leitura.
    * **`Pick<T, K>`**: Seleciona um subconjunto de propriedades.
    * **`Omit<T, K>`**: Remove um subconjunto de propriedades.
    * **`Exclude<UnionType, ExcludedMembers>`**: Exclui membros de um Union Type.
    * **`Extract<Type, Union>`**: Extrai membros de um Union Type que são atribuíveis a outro.
    * **`NonNullable<T>`**: Remove `null` e `undefined` de um tipo.
    * **`Record<K, T>`**: Cria um tipo de objeto com chaves `K` e valores `T`.
    * **`Parameters<T>`**: Extrai os tipos dos parâmetros de uma função.
    * **`ReturnType<T>`**: Extrai o tipo de retorno de uma função.

### `06_testes_jest/`

Esta pasta oferece exemplos de como realizar testes unitários usando Jest:

* **`soma.ts`**: Um arquivo simples com funções matemáticas básicas para serem testadas.
* **`soma.test.ts`**: Contém os testes unitários para as funções em `soma.ts`, demonstrando o uso de `describe`, `it`/`test`, `expect` e matchers comuns do Jest (`.toBe()`, `.toThrow()`). Inclui também exemplos de **Hooks de Teste** (`beforeEach`, `afterEach`).
* **`servicoUsuarios.ts`**: Um serviço que simula requisições HTTP para uma API externa (JSONPlaceholder) usando Axios.
* **`servicoUsuarios.test.ts`**: Demonstra como testar funções assíncronas que fazem requisições HTTP, utilizando **mocks do Jest (`jest.mock('axios')`)** para simular as respostas da API e garantir que os testes sejam independentes de chamadas de rede reais.

---

## 🤝 Contribuições

Sinta-se à vontade para explorar o código, sugerir melhorias ou relatar problemas.

---

## 👨‍💻 Autor

[monickecunha](https://github.com/monickecunha/estudos-typescript) - Estudante de Análise e Desenvolvimento de Sistemas.
