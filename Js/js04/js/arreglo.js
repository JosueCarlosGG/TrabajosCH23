let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]

let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 

let elementoEliminado = frutas.splice(pos, 1)
// ["Manzana", "Fresa"]

let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales)
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos2 = 1, numElementos = 2

let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"