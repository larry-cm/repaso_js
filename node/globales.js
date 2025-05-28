// el objeto globalThis es el que saca variables como console,fetch y otras

globalThis.console.log('esto funciona de la misma manera')

globalThis.Array.isArray({ noIsArray: true })

globalThis.process.cwd() // para servidores

globalThis.window.Location() // para navegadores
