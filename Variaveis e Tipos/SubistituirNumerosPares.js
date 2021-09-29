var myArr = [1, 2, 3, 4, 5, 6, 7, 10, 30, 30, 2, 10, 305, 13, 4, 8]
const myError = new Error('String inválida')

subistituirNumeroPar = arr => {
  if (!Array) return myError
  for (let value of arr) {
    if (value % 2 === 0) {
      console.log(value)
    }
  }
}

subistituirNumeroPar()
