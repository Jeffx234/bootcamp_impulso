//continue a solução

let alcohol = 0
let gasoline = 0
let diesel = 0
let fim = true

while (fim) {
  const code = Number(gets())

  switch (code) {
    case 1:
      alcohol++

      break
    case 2:
      gasoline++

      break
    case 3:
      diesel++

      break
    case 4:
      fim = false

      break
  }
}

console.log('MUITO OBRIGADO')
console.log('Alcool: ' + alcohol)
console.log('Gasolina: ' + gasoline)
console.log('Diesel: ' + diesel)
