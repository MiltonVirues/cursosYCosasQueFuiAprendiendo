/*
Un tipo se compro una maquina que detecta a un mayor de 18 años y que si entra luego de las 2 AM no pague

Problema (a):

-Dejar pasar solo a los +18
-El primero que entre despues de las 2 AM, no paga

Problema (b):

-Crear mini-sistema para registar presentes(P) y ausentes(A)
-Pasados 30 dias,mostrar su situacion actual del alumno
-maximo de 10% de ausencias

Problema (c):

-Crear Calculadora que simplifique el trabajo

*/

// Que hacer(Conclusion propia):

// -Hacer condicional para detectar la edad de la persona que pasa.
// -Hacer bucle while para ir aumentando de hora en hora.
// -Hacer bucle for para ir aumentando las personas.
// -Todo lo anterior encerrarlo en una funcion.

// Problema (a):

// let free=false; //Cuando la entrada gratis se halla dado, lo vamos a convertir en true
// const validarCliente=(time)=>{
// 	let edad=prompt("Cual es tu edad?: ");
// 	if (edad>=18) {
// 		if (time>=2&&time<7&&free==false) {
// 			alert("Podes pasar gratis porque sos la primer persona despues de las 2 AM");
// 			free=true;
// 		}else{
// 			alert(`son las ${time}:00HS y podes pasar, pero tenes que pagar la entrada`);
// 		}
// 	}
// 		else{
// 			alert("Sos menor papito, tomatela de aca pedazo de vivo..");
// 		}
// }

// validarCliente(1.2);
// validarCliente(1.4);
// validarCliente(1.5);
// validarCliente(1.8);
// validarCliente(2);
// validarCliente(3);

// Problema (b):
// let cantidad=prompt(" ¿Cuantos alumnos son?");
// let alumnosTotales= [];

// for (i=0;i<cantidad;i++) {
// 	alumnosTotales[i]=[prompt("Nombre del alumno: "+ (i+1)),0];
// }

// const tomarAsistencia=(nombre,p)=>{
//  let presencia = prompt(nombre);	
// if(presencia=="p"||presencia=="P"){
// 	alumnosTotales[p][1]++; 
// }
// }

// for (i = 0; i <30; i++) {//Ejecutamos 30 veces el bucle
// for (alumno in alumnosTotales) {
// 	tomarAsistencia(alumnosTotales[alumno][0],alumno);
// }
// }
// for (alumno in alumnosTotales) {
// let resultado=`${alumnosTotales[alumno][0]}:<br>
// _________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
// _________Ausencias:<b>${30<b>-alumnosTotales[alumno][1]}</b>
// `;
// if (30-alumnosTotales[alumno][1]>18) {
// resultado+="<b style='color:red'REPROBADO</b><br><br>"
// }else{
// resultado+="<br><br>";
// } document.write(resultado);
// }


// funcinamiento de la matriz
// en este caso donde se utilizo el for:

// matrizEnUnFor[i][1]
// estamos accediendo al primer elemento que es la "i", la "i" corresponde todo elemento de la matriz, en este caso utilizamos el numero de asistencias en este caso si quiero operar el segundo valor tendria que poner "[i][1]" y en caso del primer elemento "[i][0]" los matrices en javascript en un bucle for funcionan de esa manera.

//Problema (c):

const sumar=(num1,num2)=>{
return parseInt(num1)+parseInt(num2);	
}

const restar=(num1,num2)=>{
return parseInt(num1)-parseInt(num2);	
}

const dividir=(num1,num2)=>{
return parseInt(num1)/parseInt(num2);	
}

const multiplicar=(num1,num2)=>{
return parseInt(num1)*parseInt(num2);	
}

alert("que operacion matematica deseas realizar?");
let operacion=prompt("1: suma,2: resta, 3: division, 4: multiplicacion");

if (operacion==1) {
	let numero1=prompt("primer numero para sumar: ");
	let numero2=prompt("segundo numero para sumar: ");
	let resultado=sumar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}


if (operacion==2) {	
	let numero1=prompt("primer numero para restar: ");
	let numero2=prompt("segundo numero para restar: ");
	let resultado=restar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}
if (operacion==3) {	
	let numero1=prompt("primer numero para dividir: ");
	let numero2=prompt("segundo numero para dividir: ");
	let resultado=dividir(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}
if (operacion==4) {	
	let numero1=prompt("primer numero para multiplicar: ");
	let numero2=prompt("segundo numero para multiplicar: ");
	let resultado=multiplicar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}
else{
	alert("No se encontro la operacion");  
}