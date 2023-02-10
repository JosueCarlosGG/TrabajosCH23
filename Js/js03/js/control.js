//if (condition){
  //  bloque de codigo
//} else 

let edad = parseInt(prompt("escribe tu edad"));

if (edad <= 17){
    document.write("<h2>Tas chiquitin</h2>")
    
} else if(edad >= 18){
    document.write(" <h2>tas ruco</h2>")
} else {
    document.write("este no es un numero valido")
}