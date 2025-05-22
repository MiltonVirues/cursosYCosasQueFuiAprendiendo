/*
let number=23;
let number2=23;



document.write(number!==number2)

comparadores que no vi:

=== estrictamente igual :  toma en cuenta ademas si es exactamente igual del valor de la variable, su tipo de dato.
!== estrictamente diferente : toma en cuenta ademas si es exactamente diferente del valor de la variable, su tipo de dato
*/

// let valor = true;
// let valor2 = true;
// let resultado = valor && valor2;
// let resultado2 = valor || valor2;
// let resultado3 = !valor;
// document.write(resultado3) 

/*
en el caso de "&&" mientras las dos variables tengan un "true" el resultado va a ser true
se puede utilizar con operadores de comparacion
por ejemplo:

num1=12;
num2=24;

afirmacion=num1<num2; //aca utilizamos operadores d comparacion para que estos obtengan un resultado booleano para luego, utilizar la compuerta AND o " && " para que por ejemplo el comparar si ambas variables dieron un resultado truef
afimacion2=num!=num2;

document.write(afirmacion && afirmacion2)

en el caso de "||" con que uno de los valores booleanos sea verdadero, la compuerta OR va a colocar un true al final

en el caso de "!" lo que hace es negar el rsultado, osea cambiar la respuesta que envia el valor booleano
*/

num1=12;
num2=24;
num3=25;
num4=92;
num5=91;

op= (num1<num2||num2<num3)&&(!(num1!=num2)&&num5!=num3)
 
document.write(op)

// camelCase
// El camelcase es la manera en la cual trabaja javascript, y hasta puede ser una manera de ordenar las variables
// Explicacion dada por chatBING
// El camelCase es una convención de nomenclatura utilizada en programación, incluyendo JavaScript, donde la primera palabra de una variable o función comienza con una letra minúscula y cada palabra subsiguiente comienza con una letra mayúscula. Por ejemplo, en lugar de escribir “nombre_de_usuario”, en camelCase se escribiría “nombreDeUsuario”. Esta convención ayuda a mejorar la legibilidad del código y es ampliamente utilizada en la comunidad de JavaScript.

// Ej:
// holaComoEstas


