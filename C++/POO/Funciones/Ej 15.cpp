/*
Ejercicio 15:
Realize una funcion que tome como parametros un vector y su tamaño y diga si el vector
esta ordenado crecientemente.
Sugerencia: compruebe que para todas las posiciones del vector, salvo para la 0, el elemento del vector es mayor o iguql que el elemento que le procede en el vector.*/

#include<iostream>
#include<conio.h>
using namespace std;

void pedirdatos();
void comprobarOrdenamiento(int vec[],int tam);
int vec[100],tam;
int main(){
	pedirdatos();
	comprobarOrdenamiento(vec,tam);

	
getch();
return 0;
}
void pedirdatos(){
	cout<<"Digite el numero de elementos del vector: ";
	cin>>tam;
	for(int i=0;i<tam;i++){
cout<<i+1<<". Digite un numero: ";
cin>>vec[i];		
	}
}
void comprobarOrdenamiento(int vec[],int tam){
char band='F';
int i=0;
while((band=='F')&&(i<tam-1)){
if(v[i]>v[i+1]){
	band=='V';
	
}
i++;
}
if(band=='F'){
cout<<"El arreglo esta ordenado";
	
}
else{
	cout<<"El arreglo no esta ordenado";
}
}
