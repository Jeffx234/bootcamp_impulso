let salario = 4520

function calcularImposto(valor) {
  let imposto = 0
  let montante
  let salario = valor

  if (salario > 4500.0) {
    montante = salario - 4500.0
    imposto = montante * 0.28 + 350
  } else if (salario > 3000.0) {
    montante = salario - 3000.0
    imposto += montante * 0.18 + 80
  } else if (salario > 2000.0) {
    montante = salario - 2000
    imposto += montante * 0.08 //insira seu código nos espaços em branco
  }

  return imposto
}

let resultado = calcularImposto(salario)

console.log(resultado === 0 ? 'Isento' : 'R$ ' + resultado.toFixed(2))
