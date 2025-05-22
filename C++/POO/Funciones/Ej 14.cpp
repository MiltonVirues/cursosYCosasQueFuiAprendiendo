/*
Ejercicio 14: Realize una funcion que tome como parametros un vector de numeros enteros y devuelva la suma de sus elementos*/
#include<iostream>
#include<conio.h>
using namespace std;
void pedirdatos();
int vec[100],tam;
int calcularSuma(int vec[],int tam);
int main(){
	pedirdatos();
	cout<<"\nla suma dde los elementos del vector es: "<<calcularsuma(vec,tam);
	
	getch();
	return 0;
}
void pedidatos(){
cout<<"Digite el numero de elementos del vector: ";
cin>>tam;
for(int i=0;i<tam;i++){
	cout<<i+1<<". Digite un numero: ";
	cin>>vec[i];
}
}
int calcularSuma(int vec[],int tam){
int suma=0;
for(int i=0;i<tam,i++){
	suma+=vec[i];
 }	
 return suma;
}
