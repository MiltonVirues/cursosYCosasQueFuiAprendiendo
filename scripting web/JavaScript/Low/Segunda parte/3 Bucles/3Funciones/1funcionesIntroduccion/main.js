// Las funciones en JavaScript son uno de los bloques de construcción fundamentales en el lenguaje. Una función en JavaScript es un bloque de código o un conjunto de instrucciones que realiza una tarea específica y que puede reutilizarse a voluntad12. Una función en JavaScript es similar a un procedimiento, es decir, un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida1.

// Las funciones son muy útiles en programación ya que permiten dividir el trabajo que hace un programa en tareas más pequeñas separadas de la parte principal. Esto hace que el código sea más fácil de leer, entender y mantener. Además, las funciones pueden ser reutilizadas en diferentes partes del programa, lo que evita tener que escribir el mismo código varias veces.

// Existen diversas formas de crear una función en JavaScript, como por declaración, por expresión o por constructor de objeto2. También hay muchas funciones predefinidas en JavaScript que puedes utilizar para realizar tareas comunes, como manipular cadenas de texto, trabajar con arreglos, hacer cálculos matemáticos, entre otras cosas.

// introduccion*:
// syntaxis: 
// manera 1:
// function "Nombre de la funcion"(){
// 	"Bloque de codigo"
// return tipo de dato o mensaje
// }
// manera 2: 
// 	"Nombre de la funcion" = function (){
// 	"Bloque de codigo"
// return tipo de dato o mensaje //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
// }


// primer ejemplo*:

// function saludar(){
// 	respuesta = prompt("¡Hola Milton!¿Como te encuentras hoy?: ");
// if (respuesta=="bien") {
// 	alert("me alegro :D");
// }else if(respuesta=="mal"){
// 	alert("Que pena :C");
// }
// return "Funcion terminada correctamente"
// }

// let saludo =saludar(); //Para poder utilizar La sentencia Return es importante declarar una variable de antemano.
// document.write(saludo);


//Parametros de una funcion 

// function suma(num1,num2){
// 	let sum=num1+num2;
// 	document.write(sum);
// 	document.write("<br>")
// }

// suma(11,22);

// suma(100,1);

// function saludar(nombre){
// 	let frase=`¡Hola! ${nombre}!¿Como estas?`;
// 	document.write(frase);
// }
 
// saludar("Milton"); //invocacion de la funcion
 
//  Funciones con flecha
//  const: "variable" cuyo valor no puede ser cambiado

 const saludar=nombre=>{
 	let frase=`¡Hola! ${nombre}!¿Como estas?`;
 	document.write(frase);
 }
 saludar("Milton");
 //La funcion flecha es una tercer manera de colocar que utilizamos una funcion en Javascript y tiene cosas interesantes
 // como por ejemplo: Si tiene un solo parametro no es necesario colocar parentesis, como se ve arriba
 // otra caracteristica interesante que posee es que cuando solo se utiliza una sola linea de codigo en la funcion, se puede abreviar todavia mas de la siguiente manera:
 // const saludar=nombre=>document.write(nombre); 
 