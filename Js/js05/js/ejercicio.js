//***eercicio 1 */
let unidades = 130;
let GPA = 3.0;
if (GPA > 2.0 && unidades >= 120){
        console.log("puede graduarse")
    }else 
    console.log("no eres elegible")



    //****ejercicio 2 */
    let scp = 78
    let prog = 60

    
    if (scp >= 75 || prog >= 75){
        console.log("eres elegible para la graduacion")
    }else 
    console.log("no eres elegible")



    //******ejercicio 3 //



    let texto = "hola mundo";
    let puntos = "";

    for (let i = 0; i < texto.length; i++) {
     if (texto[i] !== " ") {
    puntos += texto[i] + ".";
    } else {
    puntos += " ";
    }
    }texto
    
    console.log(puntos);



    let texto = "hola mundo";
    let puntos = texto.replace(/./g, "$&.");

        console.log(puntos);




    let texto = "hola mundo";
    let Puntos = texto.replaceAll("", ".").substring(1);


        
        console.log(Puntos);








