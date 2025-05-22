/* Ejercicio 3: Escriba una funcion llamada al_cuadrado() que calcule el valor del cuadrado que se le transmite y despliege el resultado.
La funcion debera ser capaz de elevar al cuadrado numeros flotantes*/
#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;
void pedirdatos();
void al_cuadrado(float n);
float num;
int main(){
	pedirdatos();
	al_cuadrado(num);
	
	
	getch();
	return 0;
}
void pedirdatos(){
	cout<<"Digite el numero al elevar al cuadrado: ";
	cin>>num;
}
void al_cuadrado(float n){
float elevacion= n*n;
cout<<"el resultado es: "<<elevacion<<endl;
}
