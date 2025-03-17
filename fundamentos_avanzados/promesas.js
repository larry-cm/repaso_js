// se crean promesas con el constructor Promise
// se resuelven con resolve y se rechazan con reject
const active = false
const handlePromise = (resolve, reject) => {
  setTimeout(() => {
    if (active) resolve('La promesa se resolvió')
    else reject('La promesa se rechazó')
  }, 1000)
}

const promesa = new Promise(handlePromise)

promesa
  .then(res => console.log(res))
  .then(() => console.log('promesa concatenada para hacer algo más'))
  .catch(err => console.log('se rechazo', err))
  .finally(e => console.log('Finalizado'))
