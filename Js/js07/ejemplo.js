
fetch("https://pokeapi.co/api/v2/pokemon/4")
//.then toma la informacion
//resultado es una funcion que comvierte la informacion en lo que necesites
//por ejemplo .json para tranformarlo en formato json;
.then(response => response.json())
//regularmente cuando tranformas la informacion te devuelve otra promesa 
//a la que debes volver a usar el .then
.then(data => {

 
    console.log(data);
})
.catch(err=>console.log(err))



//crear un template utilizando Dom
    let element = document.getElementById('POKEMON1')
    element.innerHTML = `<p>${data.name}</p>`
   

    
/*response.text() – leer la respuesta y devolver como texto,
response.json() – analizar la respuesta como JSON,
response.formData() – devuelve la respuesta como objeto (),FormData
response.blob(): devuelve la respuesta como Blob (datos binarios con tipo),
response.arrayBuffer() – devuelve la respuesta como ArrayBuffer (representación de bajo nivel de datos binarios),
además, es un objeto ReadableStream, le permite leer el cuerpo fragmento por fragmento, veremos un ejemplo más adelante.response.body*/

