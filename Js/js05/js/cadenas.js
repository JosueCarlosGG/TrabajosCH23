let texto = "Hola mundo";
let mensaje = "el texto tiene " + texto.length + " caracteres"

console.log(mensaje)

//agregar un espacio entre cada caracter

let texto2 = "Hola mundo";
let mensaje2 = " "
//siempre usar un for para cuando necesites recorrer un array o objeto
for (let index = 0; index < texto2.length; index++) {
    //se sobre escribe la variable de mensaje 2 + el texto 2 + un espacio y como va de 1 en 1 va agregando un espacio entre cada uno
    mensaje2 = mensaje2 + texto2[index] + " ";
    
}

//elimina el ultimo caracter en blanco o espacio
mensaje2 = mensaje2.trim()

console.log(mensaje2);

//hacer las letras en mayusculas
let texto3 = "Hola mundo";
let mensaje3 = texto3.toUpperCase();
console.log(mensaje3);


//retorna el arreglo apartir del indice 
let texto4 = "Hola mundo";

let palabra = texto4.substr(5);//regresa "mundo"
let palabra1 = texto4.substr(0, 4);//con 2 caracteres el primero indica donde inicia y el segundo donde termina

console.log(palabra);

//con el split identifica el espacio en blanco y apartir de ahi cada una que tenga un espacio lo divide en indice 0/1/2 etc
let texto5 = "Hola mundo gracias";

let palabra2 = texto5.split(" ");
console.log(palabra2[0] + " / " + palabra2[2]);



//includes busca una letra y con el if puedes hacer si esta escriba algo y si no otra cosa distingue entre mayusculas y minusculas
let texto6 = "Hola mundo gracias";
if (texto6.includes("l")) {
    console.log("---> L")
}
    else
    console.log("No existe")
    

