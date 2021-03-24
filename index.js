import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88833322209);
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);