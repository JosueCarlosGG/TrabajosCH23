//ejercicio 1.1
//
let names = ["Maria", "Antony", "Joy", "Juan"]

function final(){
    nombres.push("Josue")
    console.log(names)
}

final()


//********ejercicio 1.2**********


function verificador(nombre, listaNombres) {
    return listaNombres.indexOf(nombre) !== -1;
  }

  const nombres1 = ["Maria", "Antony", "Joy", "Juan"];
console.log(verificador("Joy", nombres1));
console.log(verificador("Luis", nombres1));


// ***************** ejercicio 1.3 ***

function compararNombres(valor1, valor2) {
    let nombresComunes = [];
    for (let nombre of comparativa1) {
        if (comparativa2.includes(nombre)) {
          nombresComunes.push(nombre);
        }
      }
      return nombresComunes;
    }
    let comparativa1 = ["Maria", "Antony", "Joy", "Juan"]
    let comparativa2 = ["Maria", "Josue", "Antony", "Juana" ]


    console.log(compararNombres(comparativa1, comparativa2));


    //************* ejercicio 1.4 */


    function longitud(nombres) {
        let longitudes = [];
        for (const nombre of nombres) {
          longitudes.push(nombre.length);
        }
        return longitudes;
      }

      let nombres = ["Maria", "Antony", "Joy", "Juan"];
    console.log(longitud(nombres)); // devuelve [4, 5, 5, 3]



false || (true && false) //evalúa a false.
true && false //evalúa a false.
false || false //evalúa a false.
true || (11 + 12) //evalúa a true.
11 + 12 //evalúa a 23.
true || 23 //evalúa a true.
(31 + 22) || true //evalúa a true.
31 + 22 //evalúa a 53.
53 || true //evalúa a true.
true && (1 + 7) //evalúa a true.
1 + 7 //evalúa a 8.
true && 8 //evalúa a true.
false && (3 + 4) //evalúa a false.
3 + 4 //evalúa a 7.
false && 7 //evalúa a false.
(1 + 2) && true //evalúa a true.
1 + 2 //evalúa a 3.
3 && true //evalúa a true.
(32 * 4) >= 129 //evalúa a true.
32 * 4 //evalúa a 128.
128 >= 129 //evalúa a false.
false !== !true //evalúa a false.
!true //evalúa a false.
false !== false //evalúa a false.
true === 4 //evalúa a false.
true y 4 //son de tipos diferentes (booleano y número respectivamente).
false === (847 === '847') //evalúa a true.
'847' //se convierte implícitamente a un número durante la comparación.
847 === 847 //evalúa a true.
false === true //evalúa a false.
false === (887 == '887') //evalúa a true.
//'887' se convierte implícitamente a un número durante la comparación.
887 == 887 //evalúa a true.
false === false //evalúa a true.
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false //evalúa a true.
!true //evalúa a false.
100 / 5 //evalúa a 20.
!(100 / 5) === 20 //evalúa a false.
328 / 4 //evalúa a 82.
false || false || true //evalúa a true.