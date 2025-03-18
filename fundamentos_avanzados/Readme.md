# Vamos a fortalecer las bases que tengo avanzadas de js

en este modulo veremos cosas como promesas, async, await, request, sobre erres y como manejarlos.

## Las clases son plantillas de los objetos

- Las clases son plantillas para objetos.
- JavaScript llama a un método constructor cuando creamos una nueva instancia de una clase.
- La herencia es cuando creamos una clase padre con propiedades y métodos que podemos extender a clases hijas.
- Usamos la palabra clave extends para crear una subclase.
- La palabra clave super llama al constructor() de una clase padre.
- Los métodos estáticos se llaman en la clase, pero no en instancias de la clase.

[**ver algunos ejemplos realizador por @larry-cm**](./clases.js)

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

Son objetos que representan un resultado esperado en una operación
tienen tres estados: **resolved, rejected, pending.**

Tienen tres métodos principales para manejarse:
estos reciben una función que por **parámetro** se pasa el objeto que **se evalúa como el mensaje de error o la respuesta.**

> [!TIP] *los métodos se pueden concatenar tantos como queramos*
> [!WARNING] ¡menos en el caso del catch que ejecutara el primer método!*

En el caso de finally el parámetro es undefined pero el código de la función es el que se ejecuta siempre.

```javascript
    .then(res => res) // para cuando es resulta
    .then(res => res) 
    .catch(err => err) // para cuando es fallida
    .finally(always => always) // se ejecuta siempre que se termina de ejecutar la promesa
    .finally(always => always) 
```

## async await de js

la asincronía y espera de datos es una manera mejor de manejar promesas anidadas para facilitar la estructuración de los datos y no anidar promesas dentro de otras

los await se usan solo en funciones asíncronas que se pueden crear de las siguientes maneras
> [!TIP] *una función asíncrona devuelve una promesa sea o no sea asíncrono el contenido de la función*

```javascript

async function dataFetch(){}
dataFetch()
const dataFetch2 = async () => {}
dataFetch2()
```

> [!TIP] *el await detiene o para la ejecución de nuestro código asíncrono hasta esperar el resultado de la promesa*

el operador await espera el resultado resuelto de una promesa una vez la promesa sea resuelta en un tiempo indeterminado.

dicho operador no es cociente de si la promesa puede ser reject por eso ahi que envolver  los await en un try/catch
