/*


que encontramos en le arbol del Dom?


-Node: Es la unidad mas basica dentro del documento.Puede ser una etiqueta, un texto, un texto dentro de una etiqueta o un comentario, etc 



    <title>Nodo
        Manipulaciuon DOM // Es un nodo.pero es hijo del title
    </title>



    -Document: Ta,bien es un nodo . del tipo documento o nodo raiz aparitde del cual se desarrollan o gereran todos los demas  nodos


    -Element: son todos aquellos definidos por etiquetas ,div, img, h1, p, etc


    - attributes; Nodos que dan informacion asociada al tipo de elemento como href, alt, target, src , etc

    - comentario: comentarios y otroos elementos que estan dentro de HTML, son considerados Nodos


*/




/* Como leer nodos en mi Document Object Model (DOM)

    Metodos tradicionales (se usan en las versiones antiguas de JS)


    -document.getElementById (botonSuma) id
    -document.getElementsByTagName (<button>) tag
    -document.getElementByClassName (botones) class

*/

var elementoId = document.getElementById("botonSuma")
console.log(elementoId)

var elementoEtiqueta = document.getElementsByTagName("button")
console.log(elementoEtiqueta)
console.log("este es el primer elemento de mi coleccion de botones", elementoEtiqueta[0])

var elementoClass = document.getElementsByClassName("botones")
console.log(elementoClass)

/*
metodos recientes 

    -document.querySelector(#botones)
    -document.querySelectorAll(.botones)


*/


var unElemento = document.querySelector("#input1")
console.log(unElemento);

var variosElementos = document.querySelectorAll(".botones")
console.log(variosElementos)

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")

var botonSuma = document.getElementById("botonSuma")
var botonResta = document.getElementById("botonResta")
var botonDivision = document.getElementById("botonDiv")
var botonMulti = document.getElementById("botonMulti")




//creacion de una etiqueta del tipo imagen 
var imagenPerrito = document.createElement("img")

imagenPerrito.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg"
imagenPerrito.alt = "foto de perrito tierno"
imagenPerrito.style.width = "150px"
imagenPerrito.style.borderRadius = "40px"

var textoPerrito = document.createElement("p");
textoPerrito = "Este es mi perrito"


//poner elementos o nodos en el html
document.body.append(imagenPerrito)
document.body.append(textoPerrito)


//actualizar nodos


//1er paso: Identificar el nodo que quiero cambiar (outer)
//2do Paso: Modificar el nodo (inner)
//seleccionas donde y cual cambias
var resultadoQueCambia = document.getElementById("resultado")
//cambias lo que vez pero sigue el archivo original
resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas"

