validaArr = (arr, num) => {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

    if (typeof arr !== 'object')
      throw new TypeError('Array precisa ser do tipo object')

    if (typeof num !== 'number')
      throw new TypeError('Array precisa ser do tipo number')
    if (arr.length !== number) throw new RangeError('Tamanho inválido')
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError')
      console.log(error)
    }
    if (error instanceof TypeError) {
      console.log('Este erro é um TypeError')
      console.log(error)
    }
    if (error instanceof RangeError) {
      console.log('Este erro é um RangerError')
      console.log(error)
    } else {
      console.log('Tipo de error não esperado' + error)
    }
  }
}

console.log(validaArr())
