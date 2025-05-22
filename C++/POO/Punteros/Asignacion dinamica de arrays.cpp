/*
Asignacion dinamica de arrays
new : Reserva el numero de bytes solicitado por la declaracion.
delete : libera un bloque de bytes reservado con anterioridad. 
Ejemplo: Pedir al usuario n calificaciones y almacenarlas en un arreglo dinamico
*/
#include<iostream>
#include<conio.h>
#include<stdlib.h> //Funciona new  y delete
using namespace std;
void pedirNotas();
void mostrarNotas();
int numCalif,*calif;
int main(){
pedirNotas();
mostrarNotas();
delete[] calif;//Liberando el espacio en bytes utilizado anteriormente
	getch();
	return 0;
}
void pedirNotas(){
	cout<<"Digite el nuemro de calificaciones: ";
	cin>>numCalif;

	calif= new int[numCalif]; //crear arreglo

	for(int i=0;i<numCalif;i++){
		cout<<"Digite la nota: ";
		cin>>calif[i];
	}
}
void mostrarNotas(){
	cout<<"\n mostrando notas del usuario:\n: ";
	for(int i=0;i<numCalif;i++){
		cout<<calif[i]<<endl;
	}
}
