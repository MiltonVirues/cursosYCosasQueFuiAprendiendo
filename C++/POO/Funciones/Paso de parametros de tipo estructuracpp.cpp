/*
Paso de parametros de tipo estructura */
#include<iostream>
#include<conio.h>
using namespace std;
struct Persona{
	char nombre[20];
	int edad;
}p1;
void mostrarDatos(Persona);
void pedirDatos();
int main(){
	pedirDatos();
	mostrarDatos(p1);
	getch();
	return 0;
}
void pedirDatos(){
cout<<"Digite su nombre: ";
cin.getline(p1.nombre,30,'\n');
cout<<"Digite Su edad: ";
cin>>p1.edad;

}
void mostrarDatos(Persona p){
cout<<"Nombre: "<<p.nombre<<endl;	
cout<<"Edad: "<<p.edad<<endl;	
}
