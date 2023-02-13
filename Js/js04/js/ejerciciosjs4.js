//********ejercicio 1 ******/
let gente = ["sofia", "david", "juan"]
console.log("los nombres de la gente son: " + gente);


gente.push("sara", "agustin")
console.log("La gente que estan en la cola " + gente);

gente[1]=("david", "renata")
console.log("La gente que estan en la cola " + gente);

gente.push("elena")
console.log("La gente que estan en la cola " + gente);



//********ejercicio 2 *********/

for (var i = 1; i <= 5; i++) {
    var fila = "";
    for (var j = 1; j <= i; j++) {
      fila = fila + "* ";
    }
    console.log(fila);
  }



  //*****  ejercicio 3.1  *************** */

  let numero = 10;
while (numero > 0) {
  console.log(numero);
  numero = numero - 0.5;
}numero

//*****  ejercicio 3.2  *************** */

let yValue = 1;
while (yValue <= 100) {
  if (yValue % 2 !== 0) {
    console.log(yValue);
  }
  yValue++;
}
//*****  ejercicio 3.3  *************** */
function imprimirNumero(n) {
    let i = 1;
    while (i <= n) {
      console.log("[" + i + "]");
      i++;
    }
  }
  imprimirNumero(6)
  
////*****  ejercicio 3.4  *************** */
  function suma(n) {
     var i = 1;


    var numero = 0;
   
    while (i <= n) {
      numero = numero + i;
      i++;
    }
    return numero;
  }
  
 console.log(suma(46));