class Persona{
    //metodo 1 sin set ni get
    constructor(nombre, apellido){
        //this.nombre = nombre
        this.apellido = apellido
        this._nombre = nombre

    }
    //metodo2 que te permite acceder al atributo y darle un valor 
    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido
    }
    //asi concatenas ambos y obtienes solo el resultado no el objeto
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //polimorfismo para reutilizar el codigo  para sobre escribir el metroo de la clase padre object
    toString(){
        return this.nombreCompleto();
    }

    
}
//usar el extends para heredar lo de arriba

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        //con super ira a la clase extendida para pasarle los atributos
        super(nombre, apellido)
        this._departamento = departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    //SOBRE ESCRIBIENDO
    nombreCompleto(){
        return super.nombreCompleto() + ' , ' + this._departamento;
    }
}

let persona1 = new Persona('Jhonny', 'Deep')
console.log(persona1.toString());



let empleado1 = new Empleado('Arturo', 'Chavez', 'sistemas')
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());




/*
//con set
let persona3 = new Persona('Jhonny', 'Deep')
//asi reasignas con el metodo set
persona3.nombre = 'Juan'

console.log(persona3.nombre);

//si no lo asignas retorna lo del construtor
console.log(persona3.apellido);


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

//con .nombre accedes solo al nombre

let persona2 = new Persona('Maria', 'Jimenez');
console.log(persona2.nombre);
console.log(persona2.apellido);
*/