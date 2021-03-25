import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcioario/Diretor.js";
import { Gerente } from "./Funcioario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 11133344409);
diretor.cadastrarSenha("1234");
const gerente = new Gerente("Rodrigo", 5000, 11133345787);
gerente.cadastrarSenha("123");


const cliente = new Cliente("Lais", 39562057821, "456");


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(`${clienteEstaLogado ? "Seje bem vindo" : "Falha na autenticação"}`)