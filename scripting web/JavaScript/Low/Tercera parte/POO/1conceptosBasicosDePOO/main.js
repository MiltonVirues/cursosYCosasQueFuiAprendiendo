// Clases en JavaScript
// Definicion de una Clase: Una clase seria una manera de adaptar a codigo en la manera que se crea un objeto en la realidad

// Conceptos:
// Clase:Una clase seria como una empresa, la cual crea un producto dandole un nombre y dependiendo el tipo de empresa es depende lo que haga el producto, la empresa es el programador y el producto serian los atributos de la clase y el tipo de producto seria los metodos
// Constructor: Es una propiedad obligatoria de una clase que nos va a construir las propiedades del objeto
// Instanciacion:La instanciacion seria el invocar la clase dentro del codigo

// Instanciacion ejemplo(Sintaxys):

class animal{
//Atributos
	constructor(especie,edad,color){
this.especie=especie;//Con el "this." seleccionamos el objeto
this.edad=edad;
this.color=color;
this.informacion= `Soy ${this.especie} tengo ${this.edad} y soy de color ${this.color}`
	}
// verInformacion=()=>{ //Las funciones flecha no funcionan en los metodos de una clase
// 	document.write(this.informacion)
// }
verInformacion(){
	document.write(this.informacion+"<br>");
}
}


let perro = new animal("perro",6,"marron"); //El new lo que hace es ademas de crear la variable perro, este lo asocia con la clase animal y le permite colocar al programador dentro de los parentesis los parametros 
let gato = new animal("gato",12,"naranja");
let leon = new animal("leon",8,"amarrillo");
console.log(perro);
// document.write(perro.informacion);
// document.write(gato.informacion);
// document.write(leon.informacion);
perro.verInformacion();
gato.verInformacion();
leon.verInformacion();