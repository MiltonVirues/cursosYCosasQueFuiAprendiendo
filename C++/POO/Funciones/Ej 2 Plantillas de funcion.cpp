/*

Plantillas de Funcion 

Ejemplo: sacar el valor absoluto de un numero */
#include<iostream>
#include<conio.h>
using namespace std;

//Prototipo de Funcion
template <class TIPOD>
void mostrarAbs(TIPOD numero);
int main(){
	
int num1=4;
float num2=34.23;
double num3=12.6789;

mostrarAbs(num1);
mostrarAbs(num2);
mostrarAbs(num3);

getch();
return 0;
}
template <class TIPOD>
void mostrarAbs(TIPOD numero){
if(numero<0){
numero=numero*-1;
}
cout<<"Elvalor absoluto del numero  es: "<<numero;
}
