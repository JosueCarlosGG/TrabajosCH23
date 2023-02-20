//para obj 1,2,3
class OperadoresAritmeticas{
    numero0 = 5;
    numero1 = 0;

  
    sumar(a, b){
    return a+b;
    }
}

//para el obj4

class OperadoresAritmeticas{
    numero0 = 5;
    numero1 = 0;

    constructor (valor0, valor1){
        this.numero0 = valor0
        this.numero1 = valor1
    }


    sumar(){
    return this.numero0 + this.numero1;
    }
}
let obj4 = new OperadoresAritmeticas(8, 6);
//aqui acaba

let obj3 = new OperadoresAritmeticas();
obj3.numero0 = 8;
obj3.numero1 = 10;

console.log(obj3.sumar(obj3.numero0, obj3.numero1));

let obj2 = new OperadoresAritmeticas();
console.log(obj2.sumar(5, 6));

let obj1;
obj1 = new OperadoresAritmeticas();
console.log(obj1.numero0);