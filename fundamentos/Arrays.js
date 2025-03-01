// const arrays = [1, 2, 3]

const numbers = [2, 4, 6, 8, 3, 10];
const allEven = numbers.find((number) => number % 2 === 0 && number > 5);

const reduciendo = numbers.reduce((acc, curr) => {
    console.log(`${acc} + ${curr}`)
    return acc + curr
}, 'mira el numero ')
console.log(reduciendo);