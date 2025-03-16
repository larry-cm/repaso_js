# Vamos a fortalecer las bases que tengo avanzadas de js

en este modulo veremos cosas como promesas, async, await, request, sobre erres y como manejarlos.

## Las clases son plantillas de los objetos

- Las clases son plantillas para objetos.
- JavaScript llama a un método constructor cuando creamos una nueva instancia de una clase.
- La herencia es cuando creamos una clase padre con propiedades y métodos que podemos extender a clases hijas.
- Usamos la palabra clave extends para crear una subclase.
- La palabra clave super llama al constructor() de una clase padre.
- Los métodos estáticos se llaman en la clase, pero no en instancias de la clase.

[mirar los  ejemplos]('clases.js')

## los módulos en js CommonJs & ESmodules

los common js es la manera mas estándar y confiable de exportar módulos

se exportan con la palabras clave y se puede obligar a tener su nombre exportando un objetos con dichas propiedades.

```javascript
const x = true
module.exports = x
module.exports = {x} // {x:x}
```

y se requieren o obtienen de la siguiente manera

```javascript
const x = require('ruta_del_archivo_o_modulo')
const {x} = require('ruta_del_archivo_o_modulo')
```

también podemos intercambiar en tipo a module para decirle que es un ESmodules en el package.json y usar la exportación por lineas o un objeto que contenga todo lo que necesitamos exportar de la misma manera que en la anterior

```javascript
export const x = true
export {x} // para obligar a desestructurar
```

y para obtener o importar de la siguiente manera

```javascript
import x from 'ruta_del_archivo_o_modulo'
import {x} from 'ruta_del_archivo_o_modulo'
```

## Promesas
