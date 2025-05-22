// (Obtencion y modificacion de elementos:
// 	-textContent:devuelve el texto de cualquier nodo.
// 	-innerHTML:devuelve el contenido HTML de un elemento.
// 	-outerHTML:devuelve el codigo HTML completo del elemento.

 const titulo=document.querySelector(".titulo");

// let resultado=titulo.textContent()
// Vista Muy resumida 
// )

// Creacion de Elementos:

// -createElements() y createTextNode() y appendChild():
// const contenedor=document.querySelector(".contenedor");
// const item=document.createElement("LI");
// const textoDelItem=document.createTextNode("Este es un item de la lista");

// Tambien se podria crear lo siguiente:
// item.innerHTML="Este es un item de la lista";
// Pero en este caso como no es un objeto sino solo texto, no tendria las mismas propiedades que createTextNode. 

// item.appendChild(textDelItem)//Muestra el valor digitado dentro del objeto del nodo, esto se puede colocar tanto en el hijo "item" o el padre ".contenedor"
// console.log(textDelItem)

//¿Que pasaria si tuvieramos que crear varios elementos?
// -createDocumentFragment()

// const contenedor=document.querySelector(".contenedor");

// const fragmento=document=createDocumentFragment();

// for (var i = 0; i < 20; i++) {
// const item=document.createElement("LI");
// item.innerHTML="Este es un item de la lista";
// fragmento.appendChild(item);
// }
// console.log(contenedor);



