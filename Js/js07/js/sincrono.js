//Javascript sincrono
alert("cohorte 23");
console.log("Hola , como estas?");
alert("Dia del gatito");
console.log("adios");

setTimeout(

    function(){
        console.log("Hola mundo, con retraso");
    }, 1000
)

const myCallBack = () => console.log("Hola mundo con retraso");
setTimeout(myCallBack)
console.log("");