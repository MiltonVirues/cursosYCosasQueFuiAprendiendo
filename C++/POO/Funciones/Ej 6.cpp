/*
Ejercicio 6:
Escriba un programa en C++ que devuelva la parte fraccionada de cualquier numero introducido por el usuario. Por ejemplo, si se introduce el numero 286.089
, deberia desplegarse el numero 0.089 */
 #include<iostream>
 #include<conio.h>
 using namespace std;
 void pedirdatos();
 float Partefracionada(float n);
 float numero;
 int main(){
 pedirdatos();
 cout<<"El numero fracionado es: "<<Partefracionada(numero);
 
 
 getch();
 return 0;	
 }
 void pedirdatos(){
cout<<"Digite el numero a fracionar: ";
cin>>numero;
 }
 float Partefracionada(float n){
 	int entero=n;
 	float resultado=n-entero;
 	return resultado;
 }
 
