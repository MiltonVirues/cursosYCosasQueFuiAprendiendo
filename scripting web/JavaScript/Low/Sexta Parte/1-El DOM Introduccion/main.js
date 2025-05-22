// DOM
// -Definicion 
// -Concepto extendido

// -Nodo: Un nodo en el DOM es cualquier etiqueta en el cuerpo, como un parrafo, el mismo body 
// o las etiquetas de la lista.

// -Document: Nodos definidos por etiquetas html.
// -Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text(texto).
// -Attribute: Los atributos de las etiquetas definen nodos(En javaScript no los veremos
// 	como nodos, sino como la informacion asociada al nodo de tipo element).
// -Comentarios y otros: Los comentarios y otros elementos como las declaraciones tipo
// doctype en la cabecera de los documentos HTML generan nodos.



// Document- Metodos de seleccion de elementos:

// -getElementById():Selecciona un elemento por ID.
// -getElementsByTagName():Selecciona el nombre de todos los elementos con la etiqueta especificada.

// Syntaxis:
// parrafo=document.getElementsByTagName("p")
// document.write(elemento[0])//Esto no seria un array, sino que funciona de otra manera, basicamente es como si fuera una lista y esta se selecciona de a una, el ejemplo grafico se puede observar.
// document.write(elemento[1])
// document.write(elemento[2])


// -querySelector():Devuelve el primer elemento que coincida con el grupo especificado de selectores(Que se vio en CSS3).
// -querySelectorAll():Devuelve todos los elementos que coincidan con el numero especifidado de selectores.

// Syntaxis:
// document.querySelector(".parrafo")
// document.querySelectorAll(".parrafo")//Lo que hace es crear una lista de nodo y mostrar los elementos. 

// Metodos para definir,obtener y eliminar valores de atributos:

// -setAttribute():Modifica el valor de un atributo.
// -getAttribute():Obtiene el valor de un atributo.
// -removeAttribute():Remueve el valor de un atributo.

const rangoEtario=document.querySelector(".rangoEtario")

rangoEtario.setAttribute("type","text")//Modifica el valor de un atributo como se definio, el primer parametro es lo que queremos cambiar y el segundo parametro es el valor que queremos cambiar del primero


