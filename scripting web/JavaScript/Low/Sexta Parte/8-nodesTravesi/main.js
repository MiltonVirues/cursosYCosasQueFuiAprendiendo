// Metodos de Childs(Hijos):
const contenedor=document.querySelector(".contenedor")
// -replaceChild(): Reemplaza uno por otro
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// let h2_antiguo=document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo,h2_antiguo);

// -removeChild(): Remueve un child
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// let h2_antiguo=document.querySelector(".h2");
// contenedor.removeChild(h2_antiguo)
// -hasChildNodes(): Verifica si tiene un nodo child o no, el contenido dentro de un elemento
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// let respuesta=h2_antiguo.hasChildNodes();

// if (respuesta) {
// 	document.write("El elemento tiene hijos");
// }else{
// 	document.write("El elemento no tiene hijos");
// }



// Propiedades de Parents(Padres):
//Ambas son propiedades similares
// -parentElement:Selecciona el padre Elemento de un elemento, siempre busca una etiqueta HTML padre.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.parentElement);

// -parentNode: parent node se utilizaria si por ejemplo el parent no es un elemento HTML.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.parentNode);

// Propiedades de Siblings(Hermanos):
// -nextSibling:Muestra el siguiente hermano ignorando al primero.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.nextSibling);
// -previousSibling:Muestra el ultimo hermano.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.previousSibling);
// -nextElementSibling:Muestra la ultima etiqueta HTML hermana.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.nextElementSibling);
// -previousElementSibling:Es el primer hermano de etiqueta HTML.
// const parrafo= contenedor.createElement("P").innerHTML="Parrafo";
// const h2_nuevo= contenedor.createElement("H2");
// h2_nuevo.innerHTML="Titulo";
// const h2_antiguo=document.querySelector(".h2");

// console.log(contenedor.previousElementSibling);


// Nodos- Extras:
// -closest():Selecciona el elemento ascendente mas cercano que coincida con nuestro selector.
const div= document.querySelector(".div-3")

console.log(div.closest(".div"));