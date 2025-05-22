/*
Matrices Dinamicas

Ejemplo: Rellenar una matriz de NxM y mostrar su contenido

**puntero_matriz -> *puntero_fila -> [int] [int] 
                    *puntero_fila -> [int] [int] 
					*puntero_fila -> [int] [int] 
*/
#include<iostream>
#include<conio.h>
#include<stdlib.h>


using namespace std;

void pedirDatos();
void mostrarMatriz(int **,int,int);
int **puntero_matriz,nFilas,nCol;

int main(){

	pedirDatos();


	mostrarMatriz(puntero_matriz,nFilas,nCol);
	//Libeera la memoria que hemos utilizado en la matriz
	for(int i=0;i<nFilas;i++){//Com libero espacio en memoria de una matriz
		delete[] puntero_matriz[i];
	}
	
	


	
	getch();
	return 0;
}
void pedirDatos(){
	cout<<"Digite numero de filas: ";
	cin>>nFilas;
	cout<<"Digite numero de columnas: ";
	cin>>nCol;
	
	//Reservar memoria para la matriz dinamica
	puntero_matriz=new int*[nFilas];//Reservando memoria para las filas
	for(int i=0;i<nFilas;i++){
		puntero_matriz[i]=new int[nCol];//Reservando memoria para las columnas
	}
	cout<<"\nDigitando elementos de la matriz: ";
	for(int i=0;i<nFilas;i++){
		for(int j=0;j<nCol;j++){
			cout<<"Digite un numero["<<i<<"]["<<j<<"]:  ";
			cin>>*(*(puntero_matriz+i)+j);//puntero_matriz[i][j]
		}
	}
}
void mostrarMatriz(int **puntero_matriz,int nFilas,int nCol){
cout<<"\n\nIMpriendo matriz:\n";
for(int i=0;i<nFilas;i++){
	for(int j=0;j<nCol;j++){
		cout<<*(*(puntero_matriz+i)+j);
	}
	cout<<"\n";
}
}
