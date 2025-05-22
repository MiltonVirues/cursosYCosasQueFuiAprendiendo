// -length: Es una propiedad que dice la cantidad de caracteres dentro de un string.
// Metodos de cadena 

// -concat(): Funciona para concatenar un string con otro "variable.concat(variableQueConcatena)"
//-startsWith():Si una cadena comienza con los mismos caracteres de otra cadena retorna un valor "true", sino retorna el valor "false". "cadena.startsWith(cadena2)"
//-endsWith():Si una cadena termina con los mismos caracteres de otra cadena retorna un valor "true", sino retorna el valor "false". "cadena.endsWith(cadena2)"
//-include(): busca caracteres dentro de una cadena y si encuentra alguna similitud retorna un valor "true". "cadena.includes(cadena2)"
// -indexOf(): retorna el espacio en memoria dentro del string del caracter pedido, si no encuentra el string retorna "-1". "cadena.indexOf("cadena")"
// -lastIndexOf(): retorna el ultimo espacio en memoria dentro del string del caracter pedido, si no encuentra el string retorna "-1". "cadena.lastIndexOf("cadena")"

// Metodos de cadena(No Oficiales por ECMAScript):
// -padStart(): rellena la cantidad de caracteres deseados al principio y como caracteristica secundaria se puede editar la cantidad de espacio que va a ocupar dentro del string. cadena.padStart(10,"messi");
// -padEnd(): rellena la cantidad de caracteres deseados al final y como caracteristica secundaria se puede editar la cantidad de espacio que va a ocupar dentro del string. cadena.padEnd(10,"messi");
 // -repeat(): retorna la misma cadena una cantidad indeterminada de veces que es configurada por el usuario. "cadena.repeat(20);"

// Metodos de cadena avanzados
// -split(): Divide el string en la cantidad que queramos o el caracter que definamos donde se divide y convierte el string en un array. cadena.split("de")
// -substring(): Modifica donde empieza y termina el string. cadena.substring(0,2);
// -toLowerCase(): Convierte una cadena a minuscula. "cadena.toLowerCase();"
// -toUpperCase(): Convierte una cadena a MAYUSCULA. "cadena.toUpperCase();"
// -toString(): Convierte a string un dato. "cadena.toString();"
// -trim(): Elimina los espacios en blanco. cadena.trim();

let cadena ="cadena de prueba";
let cadena2 ="cadena"
resultado = cadena.startsWith(cadena2);

document.write(resultado);