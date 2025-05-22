/*
Ejercicio 16: 
Realiza una funcion que tome como parametros un vector de numeros y su tamaño y cambie el signo de los elementos del vector.
*/
#include<iostream>
#include<conio.h>
using namespace std;

void pedirdato();
void cambiarSigno(int vec[],int);
void mostrarVector(int vec[],int);
int vec[100],tam;
int main(){
	pedirdato();
	cambiarSigno(vec,tam);
	mostrarVector(vec,tam);
	getch();
	return 0;
}
void pedirdato(){
	cout<<"digite el tamanio del vector: ";
	cin>>tam;
	for(int i=0;i<tam;i++){
		cout<<i+1<<". Digite el numero: "; 
		cin>>vec[i];
	} 
}
void cambiarSigno(int vec[],int tam){
	for(int i=0;i<tam;i++){
		vec[i]*=-1;//vec[i]=vec[i] * -1
	}
}
void mostrarVector(int vec[],int tam){
cout<<"\t\nMostrando los elemntos del vector con su signo modificado\t\n";
for(int i=0;i<tam;i++){
 	cout<<vec[i]<<" "; 
 }	
}
