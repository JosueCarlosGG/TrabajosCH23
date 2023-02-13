let miVariable = 5;


console.log(miArray[0])


console.log(matrizArray[0][2])

//ciclo for

for(let i=0; i < 5; i++){
console.log("imprimiendo i " + i)
}
//imprimiendo arreglo
let miArray = [2,3,4,5,6,7];
for(let i=0; i <= 5; i++){
    console.log("imprimiendo i " + miArray[i]);
    }

    //matriz
let matrizArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let matrizR=[
    [],[],[]
]
//multiplicar el array y agregarlo a una array vacia
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matrizR[i][j] = matrizArray[i][j] * matrizArray[i][j];
    }
}

console.log(matrizR)
//buscar entre toda la matriz
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            console.log("imprimiendo la matriz " + matrizArray[i][j])
        }
    }


    //******************* WHILE ***********************/
    let contador = 0
    while(contador < 10){
        console.log(contador);
        contador++;
    }