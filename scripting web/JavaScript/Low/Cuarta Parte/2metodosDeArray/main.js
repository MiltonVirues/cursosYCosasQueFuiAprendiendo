// Metodos de Arrays:

// Transformadores:
// -pop():Crea el ultimo elemento de un array y lo devuelve. "nombres.pop();"
// -shift():Crea el primer elemento de un array y lo devuelve. "nombres.shift();"
// -push(): agrega un elemento al array al final de la lista. "nombres.push("","","");"
// -reverse(): invierte el orden de los elementos de un array. "nombres.reverse();"
// -unshift(): agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array. "nombres.unshift(,,)"
// -sort(): ordena los elementos de un array localmente y devuelve el array ordenado. "nombres.sort()"
// -splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. "nombres.splice(0,2,valorParaRemplazar)"

// Accesores:
// -join(): une todos los elementos de una matriz(u objeto similar) en una cadena y la devuelve. "nombres.join("<br>elemento: ");"
// -slice(): devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). "numeros.slice(0,2)"

// deRepeticion:
// -forEach(): Ejecuta la funcion indicada una vez por cada elemento del array. "nombres.forEach()"
// -filter():Crea un nuevo array con todos los elementos que cumplan la condicion. "numeros.filter(numero=> document.write(numero+ "<br>"))"

let nombres=["pedro","maria","jorge"];

let resultado = nombres.join("<br>elemento: ");

document.write("elemento: "+ resultado);