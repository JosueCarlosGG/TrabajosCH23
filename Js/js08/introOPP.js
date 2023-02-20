let persona = {
    nombre: 'juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return 'el nombre completo es ' + this.nombre + ' ' + this.apellido;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());