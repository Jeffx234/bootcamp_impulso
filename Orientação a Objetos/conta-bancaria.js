class ContaBancária {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = saldo
  }
  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação inválida'
    }
    this._saldo -= valor
    return this._saldo
  }

  depositar() {
    this._saldo += valor
    return this._saldo
  }
}

class ContaCorrente extends ContaBancária {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, tipo, saldo)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }
  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupança extends ContaBancária {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, tipo, saldo)
    this.tipo = 'poupança'
  }
}

class ContaUniversitaria extends ContaBancária {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, tipo, saldo)
    this.tipo = 'universitária'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada'
    }
    return (this._saldo -= valor)
  }
}
