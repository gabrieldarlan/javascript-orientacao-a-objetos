export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor==Conta) {
            throw new Error("Não pode instanciar a classe Conta Diretamente.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        console.log(this.constructor);
    }

    set cliente(value) {
        if (value instanceof Cliente) {
            this._cliente = value;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Metodo abstrato
    sacar(valor) {
        throw new Error('O método Sacar da conta é abstrato');
    }

    _sacar(valor, taxa) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    }

}