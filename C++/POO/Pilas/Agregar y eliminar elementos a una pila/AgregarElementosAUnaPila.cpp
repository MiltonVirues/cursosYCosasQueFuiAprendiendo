#include<iostream>
#include<conio.h>
#include <stdlib.h>
using namespace std;
struct Nodo
{
	//Agregar Elementos a una pila
int dato;
Nodo *siguiente;	
};
void agregarPila(Nodo *&,int);
void agregarPila(Nodo *&,int &);
int main()
{
int dato;
Nodo pila=NULL;
cout<<"[Digite un numero: ";
cin>> dato;
agregarPila(pila, dato);
cout<<"[Digite otro numero: ";
cin>> dato;
agregarPila(pila, dato);
cout<<"[Sacando dato/s de pila.....]"
while(pila!=NULL){
sacarpila(pila,dato);
if(pila!=NULL){
	cout<<dato<<" , ";
}else{
	cout<<"\n...";
}
}
getch();
	return 0;
}
void agregarPila(Nodo *&,int){
	Nodo *nuevo_nodo= new nuevo_nodo();
	nuevo_nodo->dato=n;
	nuevo_nodo->siguiente=pila;
	pila=nuevo_nodo;
}
void agregarPila(Nodo *&pila,int &n){
	Nodo *aux = pila;
n=aux->dato;
pila=aux->siguiente;
delete aux;
}