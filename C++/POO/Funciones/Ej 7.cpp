/*
Ejercicio 7:
Escriba una plantilla de funcion llamada despliegue() que despliegue el valor del argumento unico que se le transmite cuando es invocada la funcion*/
#include<iostream>
#include<conio.h>
using namespace std;

template <class TIPOD>
void despliegue(TIPOD dato);

int main(){
	
	int dato1=4
	float dato1=12.12
	double dato1=34.5676
	char dato1='a';
	
	despliegue(dato1);
despliegue(dato2);
despliegue(dato3);
despliegue(dato4);
	
	getch();
	return 0;
}
template <class TIPOD>
void despliegue(TIPOD dato){
cout<<"El dato es: ";	
}

