// Setencia Label

// Ejemplo:
array1=["maria","josefa","roberta"];
array2=["pedro","marcelo",array1,"josefina"];

forrancio:
for(let array in array2){
if (array == 2) {
	for (let array of array1) {
		document.write(array+"<br>");
	break forrancio; 
	// El label es una sentencia que nos permite asociar cualquier nombre a un bucle
	}
}
	else{
		document.write(array2[array]+"<br>");
	}
}
