// Sentencia For In y For Of

// For In
// Lo que hace el for in es devolvernos la posicion en memoria de el array 
animales=["gato","perro","tRex"];
for(animal in animales){
document.write(animales[animal]/*Con esto mostramos el tipo de variable*/+"<br>");
}

document.write("<br>");
// For Of
// Lo que hace el for of es similar, pero este no indica el espacio en memoria sino que muestra directamente el tipo de dato almacenado en el array
for(animal of animales){
document.write(animal+"<br>");
}