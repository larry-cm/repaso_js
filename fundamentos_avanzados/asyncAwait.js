async function seeAsync () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        2
      )
    }, 500)
  })
}
const e = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      2
    )
  }, 500)
})

seeAsync()
  .then(e => console.log(e))
  .then(e => console.log('es un valor asíncrono lo de arriba'))
console.log('hola')
