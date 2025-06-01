import axios from 'axios';

export interface Usuario {
  id: number;
  name: string;
  email: string;
}

export async function buscarTodosUsuarios(): Promise<Usuario[]> {
  try {
    const response = await axios.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error; // Propaga o erro para quem chamou
  }
}

export async function buscarUsuarioPorId(id: number): Promise<Usuario> {
  try {
    const response = await axios.get<Usuario>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id}:`, error);
    throw error;
  }
}

export async function criarUsuario(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
  try {
    // A API de mock JSONPlaceholder não realmente "cria" um usuário,
    // mas simula o retorno de um.
    const response = await axios.post<Usuario>('https://jsonplaceholder.typicode.com/users', usuario);
    return response.data; // A API de mock retorna o objeto enviado + um ID
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}