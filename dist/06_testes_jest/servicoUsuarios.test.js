"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/06_testes_jest/servicoUsuarios.test.ts
const axios_1 = __importDefault(require("axios"));
const servicoUsuarios_1 = require("./servicoUsuarios");
// 1. Mockar o módulo axios inteiro
// Esta linha diz ao Jest para "mockar" o módulo 'axios'.
// O Jest então procura por um arquivo __mocks__/axios.ts (ou .js)
// Se não encontrar, ele cria um mock automático e você pode sobrescrever seus métodos.
jest.mock('axios');
// Afirmamos que 'axios' é um Jest Mocked Function (para ter acesso aos métodos mockados como .get, .post)
const mockedAxios = axios_1.default;
describe('servicoUsuarios', () => {
    // Limpa todos os mocks após cada teste para garantir isolamento
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('deve buscar todos os usuários com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const usuariosMock = [
            { id: 1, name: 'Usuário 1', email: 'user1@example.com' },
            { id: 2, name: 'Usuário 2', email: 'user2@example.com' },
        ];
        // Configura o mock de axios.get para retornar um valor específico
        mockedAxios.get.mockResolvedValueOnce({
            data: usuariosMock,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: { url: 'https://jsonplaceholder.typicode.com/users/1', method: 'get' },
        });
        const usuarios = yield (0, servicoUsuarios_1.buscarTodosUsuarios)();
        // Verifica se axios.get foi chamado com a URL correta
        expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
        // Verifica se a função retornou os dados mockados
        expect(usuarios).toEqual(usuariosMock);
    }));
    it('deve buscar um usuário por ID com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const usuarioMock = { id: 1, name: 'Usuário Teste', email: 'teste@example.com' };
        mockedAxios.get.mockResolvedValueOnce({
            data: usuarioMock,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: { url: 'https://jsonplaceholder.typicode.com/users/1', method: 'get' },
        });
        const usuario = yield (0, servicoUsuarios_1.buscarUsuarioPorId)(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
        expect(usuario).toEqual(usuarioMock);
    }));
    it('deve criar um novo usuário com sucesso', () => __awaiter(void 0, void 0, void 0, function* () {
        const novoUsuario = { name: 'Novo Usuário', email: 'novo@example.com' };
        const usuarioCriado = Object.assign({ id: 101 }, novoUsuario); // ID é gerado pela API
        mockedAxios.post.mockResolvedValueOnce({
            data: usuarioCriado,
            status: 201, // 201 para "Created"
            statusText: 'Created',
            headers: {},
            config: { url: 'https://jsonplaceholder.typicode.com/users', method: 'get' },
        });
        const resultado = yield (0, servicoUsuarios_1.criarUsuario)(novoUsuario);
        expect(mockedAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', novoUsuario);
        expect(resultado).toEqual(usuarioCriado);
    }));
    it('deve lançar um erro ao buscar usuários se a API falhar', () => __awaiter(void 0, void 0, void 0, function* () {
        const erroMock = new Error('Erro de rede');
        // Configura o mock para rejeitar a promise (simulando um erro de rede)
        mockedAxios.get.mockRejectedValueOnce(erroMock);
        // Verifica se a função lança o erro
        yield expect((0, servicoUsuarios_1.buscarTodosUsuarios)()).rejects.toThrow(erroMock);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    }));
    it('deve lançar um erro ao buscar usuário por ID se a API falhar', () => __awaiter(void 0, void 0, void 0, function* () {
        const erroMock = new Error('Usuário não encontrado');
        mockedAxios.get.mockRejectedValueOnce(erroMock);
        yield expect((0, servicoUsuarios_1.buscarUsuarioPorId)(999)).rejects.toThrow(erroMock);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/999');
    }));
    it('deve lançar um erro ao criar usuário se a API falhar', () => __awaiter(void 0, void 0, void 0, function* () {
        const erroMock = new Error('Falha na criação');
        mockedAxios.post.mockRejectedValueOnce(erroMock);
        const novoUsuario = { name: 'Falha', email: 'fail@example.com' };
        yield expect((0, servicoUsuarios_1.criarUsuario)(novoUsuario)).rejects.toThrow(erroMock);
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    }));
});
