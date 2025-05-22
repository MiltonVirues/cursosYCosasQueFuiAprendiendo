/*
Ejercicio 7:
Intercambiar el valor de 2 variables utilizando parametros por referencia*/

#include<iostream>
#include<conio.h>
using namespace std;
void intercambiar(int&,int&);
int main(){
	int num1=11,num2=10;
	cout<<"el valor del primer numero es: "<<num1<<endl;
	cout<<"el valor del segundo numero es: "<<num2<<endl;
	cout<<"\n el nuevo valor del primer numero es: "<<num1;
	cout<<"\n el nuevo valor del segundo numero es: "<<num2;
	
	getch();
	return 0;
}
void intercambiar(int& num1,int& num2){
int aux;
aux=num1;
num1=num2;
num2=aux;
	
}
