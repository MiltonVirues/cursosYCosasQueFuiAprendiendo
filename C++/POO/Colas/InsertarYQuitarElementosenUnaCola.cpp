
#include <iostream>
#include <conio.h>
#include <stdlib.h>
using namespace std;
struct Nodo
{
	int dato;
	Nodo *siguiente;
};
void suprimirCola(Nodo *&,Nodo *&,int &);
void insertarCola(Nodo *&,Nodo *&,int);
bool cola_vacia(Nodo *);
int main()
{
	Nodo *frente=NULL;
	Nodo *fin=NULL;
int dato;
cout<<"digite un numero= ";
cin>>dato;
cout<<"digite un numero= ";
cin>>dato;
cout<<"digite un numero= ";
cin>>dato;
insertarCola(frente,fin,dato);
	getch();
	return 0;
}
cout<<"Quitando los elementos de la cola...";
while(frente!=NULL){

	suprimirCola(frente,fin,dato);
	if(frente!=NULL){
		cout<<dato<<" , ";
	}else{
		cout<<dato<<".";
	}
}
//Funcion para insertar elementos en una cola
void insertarCola(Nodo *&frente,Nodo *&fin,int n){
Nodo *nuevo_nodo = new Nodo(); 
nuevo_nodo->dato=n;
nuevo_nodo->siguiente=NULL;
if (cola_vacia(frente))
{
frente=nuevo_nodo;
}else{
	fin->siguiente=nuevo_nodo;
}
fin=nuevo_nodo;
cout<<"Elemento"<<n<<"Insertado a cola correctamente";
}
//Funcion para determinar si la cola esta vacia o no
bool(Nodo *frente){
	/*
esto se puede optimizar. a una sola linea de codigo.
	if (frente==NULL)
	{
		return true;
	}else{
		return false;
	}
	

	return (frente==NULL)? true:false/*aca se pregunta si frente es igual a null, el primer caso
	si lo es retorna a "true" que es la primera opcion. y en caso de que no lo sea 
	retorna a "false" que es la segunda opcion;
*/
}
//Funcion para suprimir cola
void suprimirCola(Nodo *&,Nodo *&,int &n){
	n=frente->dato;
	Nodo *aux=frente;
	if(frente==fin){
		frente=NULL;
		fin=NULL;
	}else{
		frente->siguiente;
	}
	delete aux;
}
