// src/06_testes_jest/servicoUsuarios.test.ts
import axios from 'axios';
import { buscarTodosUsuarios, buscarUsuarioPorId, criarUsuario, Usuario } from './servicoUsuarios';

// 1. Mockar o módulo axios inteiro
// Esta linha diz ao Jest para "mockar" o módulo 'axios'.
// O Jest então procura por um arquivo __mocks__/axios.ts (ou .js)
// Se não encontrar, ele cria um mock automático e você pode sobrescrever seus métodos.
jest.mock('axios');

// Afirmamos que 'axios' é um Jest Mocked Function (para ter acesso aos métodos mockados como .get, .post)
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('servicoUsuarios', () => {

  // Limpa todos os mocks após cada teste para garantir isolamento
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve buscar todos os usuários com sucesso', async () => {
    const usuariosMock: Usuario[] = [
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

    const usuarios = await buscarTodosUsuarios();

    // Verifica se axios.get foi chamado com a URL correta
    expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    // Verifica se a função retornou os dados mockados
    expect(usuarios).toEqual(usuariosMock);
  });

  it('deve buscar um usuário por ID com sucesso', async () => {
    const usuarioMock: Usuario = { id: 1, name: 'Usuário Teste', email: 'teste@example.com' };

    mockedAxios.get.mockResolvedValueOnce({
      data: usuarioMock,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { url: 'https://jsonplaceholder.typicode.com/users/1', method: 'get' },
    });

    const usuario = await buscarUsuarioPorId(1);

    expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(usuario).toEqual(usuarioMock);
  });

  it('deve criar um novo usuário com sucesso', async () => {
    const novoUsuario: Omit<Usuario, 'id'> = { name: 'Novo Usuário', email: 'novo@example.com' };
    const usuarioCriado: Usuario = { id: 101, ...novoUsuario }; // ID é gerado pela API

    mockedAxios.post.mockResolvedValueOnce({
      data: usuarioCriado,
      status: 201, // 201 para "Created"
      statusText: 'Created',
      headers: {},
      config: { url: 'https://jsonplaceholder.typicode.com/users', method: 'get' },
    });

    const resultado = await criarUsuario(novoUsuario);

    expect(mockedAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', novoUsuario);
    expect(resultado).toEqual(usuarioCriado);
  });

  it('deve lançar um erro ao buscar usuários se a API falhar', async () => {
    const erroMock = new Error('Erro de rede');

    // Configura o mock para rejeitar a promise (simulando um erro de rede)
    mockedAxios.get.mockRejectedValueOnce(erroMock);

    // Verifica se a função lança o erro
    await expect(buscarTodosUsuarios()).rejects.toThrow(erroMock);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('deve lançar um erro ao buscar usuário por ID se a API falhar', async () => {
    const erroMock = new Error('Usuário não encontrado');
    mockedAxios.get.mockRejectedValueOnce(erroMock);

    await expect(buscarUsuarioPorId(999)).rejects.toThrow(erroMock);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/999');
  });

  it('deve lançar um erro ao criar usuário se a API falhar', async () => {
    const erroMock = new Error('Falha na criação');
    mockedAxios.post.mockRejectedValueOnce(erroMock);
    const novoUsuario: Omit<Usuario, 'id'> = { name: 'Falha', email: 'fail@example.com' };

    await expect(criarUsuario(novoUsuario)).rejects.toThrow(erroMock);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });
});