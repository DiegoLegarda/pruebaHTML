//****** */
//vamos a usar fetch

fetch('https://github.com/DiegoLegarda/')

//fetch('datos.json')
.then(res => res.json())  //convertir la respuesta en json
.then(data=>{console.log(data)});   //imprimir el objeto completo
/*const {nombre, apellido, edad} = data;    //destructuración de un objeto
console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`);  //imprimir el objeto desestructurado*/




