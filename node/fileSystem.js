const fs = require('node:fs')

// métodos básicos
// const stats = fs.statSync('./leer/hola.txt')
// console.log(stats.isFile())
// console.log(stats.isDirectory())
// console.log(stats.isSymbolicLink())
// console.log(stats.size)

// métodos para leer archivos de manera sincronizada
// const archivo = fs.readFileSync('./leer/hola.txt', 'utf-8') // no se nos puede olvidar el codificador de idioma
// console.log(archivo)

// leer de manera asíncrona --> con callbacks
// console.log('leyendo el primer archivo')
// fs.readFile('./leer/hola.txt', 'utf-8', /* no se nos puede olvidar el codificador de idioma */(err, text) => {
//   if (!err) console.log(text)
// })
// console.log('Hacer cosas mientras lee el archivo 2...')
// console.log('leyendo el segundo archivo')
// fs.readFile('./leer/hola2.txt', 'utf-8', (err, text) => { // cunado se termine de leer este callback
//   if (!err) console.log(text)
// })

// leer de manera asíncrona --> con promesas
const fsp = require('node:fs/promises');
// console.log('leyendo el primer archivo')
// fsp.readFile('./leer/hola.txt', 'utf-8').then(text => console.log(text))
// console.log('Hacer cosas mientras lee el archivo 2...')
// console.log('leyendo el segundo archivo')
// fsp.readFile('./leer/hola2.txt', 'utf-8').then(text => console.log(text));

// cunado no nos dan un método nativo que responda con promesas se puede trasformar.
// const { promisify } = require('util')
// const fspArtificial = promisify(fs.readFile)

// para utiliza async await con promesas
(async () => {
  console.log('leyendo el primer archivo')
  const ar1 = await fsp.readFile('./leer/hola.txt', 'utf-8')
  console.log(ar1)
  console.log('Hacer cosas mientras lee el archivo 2...')
  console.log('leyendo el segundo archivo')
  const ar2 = await fsp.readFile('./leer/hola2.txt', 'utf-8')
  console.log(ar2)
}
)()
