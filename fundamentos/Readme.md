# Fundamentos de los arrays

Estructuras de datos que guarda los valores en una posición exacta conocida como **index**

## Puntos importantes a resaltar

- ### Al usar la palabra clave  `const`  para declarar un array

    debe permanecer con el mismos  valor pero sus posiciones su pueden mutar su valor

    es decir:

    ```javascript
    const x = ['1','2']
    // puedes mutar los siguientes valores

    x[0] = 1

    // pero no el siguiente valor

    x = [1,2]
    ```

- _**Con la keyword  `let`  no aplica esto**_

### Métodos que me pueden veneficiar mas

- `push` : mete un elemento al final de mi array

- `pop` : quita un elemento al final de mi array

- `unshift` : mete un elemento al inicio de mi array

- `shift` : quita un elemento al inicio de mi array

- `indexOf` : Da la posición del elemento que se esta pasando por parámetros

- `join` : unir los elementos de un array con el parámetro que pasa o si no tiene parámetro solo se unen los elementos

- `find` : busca el primer elemento que cumpla las o la condición y me lo da

- `findIndexOf` : busca el primer elemento que cumpla las o la condición y me da la posición

- `slice` : tiene dos parámetros opcionales donde :
  
  1. es el inicio del array a retornar pero si solo se pasa un parámetro retorna desde esa posición hasta la ultima del array

  2. el final del array a retornar

- `splice` : recibe tres parámetros donde :
  1. la posición desde donde se empieza a eliminar

  2. es para el numero de elementos a eliminar contando desde el primer parámetro

  3. el tercer y los demás son los que serán insertados en el array

### Métodos que iteran sobre nuestros arrays

 comúnmente estos elementos se trabajan con un callback que tiene tres parámetros en donde

el primero es el elemento, el segundo la posición en la que esta parada en el array en ese momento y en tercer parámetro el array por el que se itera

- `every` : por cada elemento puedes verificar una o varias condiciones y si todos los elementos cumplen la condición el método devolverá true de lo contrario false

- `filter` : crea un array con los elementos que cumplan la condición, también pueden tener varias condiciones.

- `` :
<!--## Ejercicios de lógica propuestos por Deepseeck -->
