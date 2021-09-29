//let lines = gets().split('\n')

//let line = lines.shift().split(' ')
let inicio = 97
let final = 94

if (inicio >= 0 && final <= 2) {
  console.log('nova')
} else if (inicio < final && inicio > 2 && final <= 96) {
  console.log('crescente')
} else if (inicio > final) {
  console.log('minguante') //complete o código nos espaços em branco
} else {
  console.log('cheia')
}
