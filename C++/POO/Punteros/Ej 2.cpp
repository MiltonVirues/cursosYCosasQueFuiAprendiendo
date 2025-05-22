/*
Ejercicio 2: Determinar si un numero es primo o no; 
Con punteros y ademas indicar en que posicion de memoria se guardo el numero
2,3,5,7,11,13,17,19,23,29,31,...
*/
#include<iostream>
#include<conio.h>
using namespace std;
int main(){
int numero,*dir_numero,cont;
cout<<"Digite un numero: "; cin>>numero;
dir_numero=&numero;	
for(int i=1;i<*dir_numero;i++){
if(*dir_numero%2==0){
cont++;
}

}
if(cont>2){
cout<<"El numero "<<*dir_numero<< "no es primo"<<endl;
cout<<"Direccion: "<<dir_numero<<endl;

}else{
cout<<"El numero "<<*dir_numero<< "es primo"<<endl;
cout<<"Direccion: "<<dir_numero<<endl;

}

	getch();
	return 0;
}
