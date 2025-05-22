// Los condicionales son bloques de codigo que actuan dependiendo un resultado externo a estos

// La sintaxis es la siguiente:

// if(condicion){

// bloque del if	
// }

// EL condicional se va a ejecutar si la condicion es verdadera por ejemplo:

// if (10<15 //10 es menor que 15 por lo que la condicion es verdadera y pasa a ejecutarse el bloque del condicional) {
// 	alert("Hola")
// }

// No se puede producir otra accion que sea solo si el resultado es verdadero?
// si, se puede y se utiliza el "else if" que seria en español un "sino" 
// Tambien esta el caso del else que se ejecuta cuando no ay una condicion que este dentro del if o el if else
nombre= "miltonn"
if (nombre=="milton") {
	alert("quien so vo gato?")
}
else if (nombre=="virues") {

    alert("hola forro")
}
else{
	alert("quien es usted?")
}