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
exports.buscarTodosUsuarios = buscarTodosUsuarios;
exports.buscarUsuarioPorId = buscarUsuarioPorId;
exports.criarUsuario = criarUsuario;
const axios_1 = __importDefault(require("axios"));
function buscarTodosUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        }
        catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error; // Propaga o erro para quem chamou
        }
    });
}
function buscarUsuarioPorId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
        }
        catch (error) {
            console.error(`Erro ao buscar usuário com ID ${id}:`, error);
            throw error;
        }
    });
}
function criarUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // A API de mock JSONPlaceholder não realmente "cria" um usuário,
            // mas simula o retorno de um.
            const response = yield axios_1.default.post('https://jsonplaceholder.typicode.com/users', usuario);
            return response.data; // A API de mock retorna o objeto enviado + um ID
        }
        catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        }
    });
}
