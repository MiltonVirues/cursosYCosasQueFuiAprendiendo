// Caracteristicas de la POO:
// Abstraccion: Consiste en hacer al objeto lo menos complejo que podamos, resumiendo todos sus componentes basicos
// Modularidad: Es la capacidad de resolver un problema grande, separandolo por partes
// Encapsulamiento: Basicamente consiste en hacer que todos los datos esten privados, que el usuario no pueda acceder tan facil
// Polimorfismo: Consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo.

// Otros conceptos de POO:
// -Herencia:

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

//Sintaxys Herencia:
// class perro extends animal{
// 	constructor(especie,edad,color,raza){//No es necesario in iniciar los primeros 3 parametros ya que estan almacenados en la clase padre
// 		super(especie,edad,color);
// 		this.raza=raza;
// 	}
// 	ladrar(){
// 		alert("¡WOOF!")
// 	}
// }

const perroo=new perro("perro",6,"marron","doberman"); //No se puede tener un objeto con el mismo nombre que la clase
const gato = new animal("gato",12,"naranja");
const leon = new animal("leon",8,"amarrillo");
console.log(perro);
// document.write(perro.informacion);
// document.write(gato.informacion);
// document.write(leon.informacion);
perro.ladrar();
// perro.modificarRaza();
perro.modificarRaza="Pedro";
perro.raza();
document.write(perro.raza);
perro.verInformacion();
gato.verInformacion();
leon.verInformacion();

// -Metodos estaticos:
// Un metodo estatico es un metodo que no necesita que la clase se difina para poder ser creado

// class perro extends animal{
// 	constructor(especie,edad,color,raza){
// 		super(especie,edad,color);
// 		this.raza=raza;
// 	}
// 	static ladrar(){
// 		alert("¡WOOF!")
// 	}
	// -Metodos Accesores (Getters, Setters):

	class perro extends animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza=null;
	}
	// modificarRaza(){//Forma incorrecta de hacer un cambio en el valor de la variable
	// 	this.raza= "pedro"
	// }
set modificarRaza(newNombre){//El set funciona como una manera de reasignarle un valor a una propiedad dentro de una clase. es importante recordar que los métodos set también pueden contener lógica adicional, como la validación de datos, lo que los hace más poderosos y flexibles que simplemente reasignar un valor directamente.

		this.raza= newNombre;
	}

get getRaza(){
return this.raza;
}//El get resumidamente es para obtener informacion
}
document.write(perro.getRaza);
