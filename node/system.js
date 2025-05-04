const os = require('node:os')

console.log('sistema operativo ' + os.platform())
console.log('arquitectura ' + os.arch())
console.log('procesadores ' + os.cpus())
console.log('memoria total ' + os.totalmem() / 1024 / 1024)
console.log('memoria libre ' + os.freemem() / 1024 / 1024)
console.log('tiempo encendido de mi ordenador ' + os.uptime() / 60 / 60)
