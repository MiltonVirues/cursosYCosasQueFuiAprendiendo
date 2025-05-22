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
int main()
{
int n1,n2;
Nodo pila=NULL;
cout<<"Digite un numero: ";
cin>>n1;
agregarPila(pila,n1);
cout<<"Digite otro numero: ";
cin>>n2;
agregarPila(pila,n2);
	return 0;
}
void agregarPila(Nodo *&,int){
	Nodo *nuevo_nodo= new nuevo_nodo();
	nuevo_nodo->dato=n;
	nuevo_nodo->siguiente=pila;
	pila=nuevo_nodo;
}
