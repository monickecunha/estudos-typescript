module.exports = {
  preset: 'ts-jest', // Usa o preset ts-jest para lidar com arquivos TypeScript
  testEnvironment: 'node', // Define o ambiente de teste como Node.js (útil para testes de backend/funções)
  testMatch: ["<rootDir>/src/**/*.test.ts"], // Padrão para encontrar arquivos de teste (ex: arquivos terminados em .test.ts)
};