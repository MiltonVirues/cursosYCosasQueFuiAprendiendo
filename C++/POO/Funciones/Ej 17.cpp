/*
Ejercicio 17:
Realiza una funcion que tome como parametros un vector de enteros y su tama�o e imprima un vector con los elementos impares del vector recibido.
*/
#include<iostream>
#include<conio.h>
using namespace std;

void pedirDatos();

void impares(int vec[],int);


int vec[100],tam;

int main(){
	pedirDatos();
	impares(vec,tam);
	getch();
	return 0;
}
void pedirDatos(){
	cout<<"Digite el tamanio del vector: ";
	cin>>tam;
	for(int i=0;i<tam;i++){
		cout<<i+1<<". Digite un numero: ";
		cin>>vec[i];
	}
}
void impares(int vec[],int tam){
	int vecImpares[100];
	int j=0;
	
	for(int i=0;i<tam;i++){
		if(vec[i]%2!=0){
			vecImpares[j]=vec[i];
			j++;
		}
	}
	cout<<"\t\tLos elementos impares del vector: ";
	for(int i=0;i<j;i++){
		cout<< vecImpares[i]<<" ";
	}
}

