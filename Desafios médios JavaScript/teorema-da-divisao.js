const a = -7
const b = -3

q = a / b

r = a % b

if (r < 0) {
  r += Math.abs(b)
  q = (a - r) / b //escreva sua lógica aqui
}
let total = q.toFixed(0) + r
console.log(total)
