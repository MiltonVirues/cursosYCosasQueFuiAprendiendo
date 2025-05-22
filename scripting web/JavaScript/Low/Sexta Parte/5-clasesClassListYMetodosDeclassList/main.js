// Clases, classList y Metodos de classList
// -Definicion:
const titulo=document.querySelector(".titulo");
// -add():añade una clase.
// titulo.classList.add("grande");

// -remove():remueve una clase.
// titulo.classList.remove("grande");

// -item():devuelve la clase del indice especificado.
// let valor=titulo.classList.item(1);//Nos muestra la clase como si fuera un espacio en memoria dentro de un array
// document.write(valor);

// -contains():verifica si ese elemento posee o no, la clase especificada.
// nombreDeClase="grande"
// let valor=titulo.classList.contains("grande");//En caso de que lo contenga devuelve "true" un valor booleano, sino devuelve "false"
// if(valor){
// 	document.write(`la clase "${nombreDeClase}" existe`)
// titulo.classList.remove(nombreDeClase);
// }else{
// 	document.write(`la clase "${nombreDeClase}" no existe`)
// 	titulo.classList.add(nombreDeClase);
// }

// -replace():reemplaza una clase por otra.
// titulo.classList.replace("grande","chico");//El primer parametro es la clase existente y a modificar y el segundo parametro es la clase nueva que querramos reemplazar por la primera que digitamos.

// -toggle():si no tiene la clase especificada, la agrega,si ya la tiene, la elimina.
// let valor=titulo.classList.toggle("grande",trueEl valor booleano seria para que nosotros forzemos que va a hacer esta propiedad con la clase, en caso de "true" fuerza al toggle a mantener la clase y en caso de "false" fuerza siempre a eliminar la clase si es que existe);
// document.write(valor);
