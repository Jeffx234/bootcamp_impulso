function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Jeferson', 'Admin')
usuarios.set('Josiane', 'User')
usuarios.set('Tania', 'Admin')
usuarios.set('Anderson', 'Admin')

console.log(getAdmins(usuarios))
