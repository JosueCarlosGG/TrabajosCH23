let miVariable = 34;

let miArreglo = []; //declaracion literal
let miArreglo01 = new Array(); // por instancia

let miArreglo02 = [31,32,33,34];
console.log("dato de miArreglo en el indice 0 " + miArreglo02[0]);
console.log("dato de miArreglo en el indice 1 " + miArreglo02[1]);
console.log("dato de miArreglo en el indice 2 " + miArreglo02[2]);
console.log("dato de miArreglo en el indice 3 " + miArreglo02[3]);
console.log("el tamano o numero de elementos del arreglo02 es: " + miArreglo02.length);

let miArreglo03 = ["hola", "que", "tal"];
console.log (miArreglo03[0]);
console.log (miArreglo03[1]);
console.log (miArreglo03[2]);
console.log("el tamano o numero de elementos del arreglo03 es: " + miArreglo03.length);

//arreglo de objetos
let miArreglo04 = [{nombre:"josue"},{apellido:"guerrero"},{edad:25}];
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[0].nombre);
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[1].apellido);
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[2].edad);
console.log("el tamano o numero de elementos del arreglo04 es: " + miArreglo04.length);

//ordenar un arreglo
let nuevoArreglo00 = [3,6,1,4];
console.log("orden de mi arreglo con sort: " + nuevoArreglo00.sort()); // ordena de menos a mayor
console.log("quitando de mi arreglo con pop: " + nuevoArreglo00.pop()); // da el numero mas alto y lo quita del arreglo
console.log("agregando de mi arreglo con push: " + nuevoArreglo00.push(10)); // agrega un elemento
console.log("orden de mi arreglo con reverse: " + nuevoArreglo00.reverse()); //

let otroArreglo = ["hola", "que", "tal"];
console.log("orden de mi arreglo con sort: " + otroArreglo.sort()); // ordena de menos a mayor
console.log("quitando de mi arreglo con pop: " + otroArreglo.pop()); // da el numero mas alto y lo quita del arreglo
console.log("agregando de mi arreglo con push: " + otroArreglo.push(10)); // agrega un elemento
console.log("orden de mi arreglo con reverse: " + otroArreglo.reverse()); //

console.log("javascript"[2]); //otra forma de acceder a un arreglo
console.log("javascript".length);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log("longitud de matriz " + matriz.length)
console.log(matriz[1][1])