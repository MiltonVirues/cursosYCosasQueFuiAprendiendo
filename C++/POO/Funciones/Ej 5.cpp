/* Ejercicio 5:
 Escriba una funcion nombrada funpot() que eleve un numero entrero que se le transmita una potencia en numero entero positivo y despliegue el resultado.
 El numero entero positivo debera ser el segundo valor transmitido ala funcion */
 #include<iostream>
 #include<conio.h>
 using namespace std;
 void pedirdatos();
 void funpot(int x,int y);
 int numero,exponente;
 int main(){
 	pedirdatos();
 	funpot(numero,exponente);
 	
 	getch();
 	return 0;
 }
 void pedirdatos(){
 	cout<<"Digite el numero inicial: ";
 	cin>>numero;
 	cout<<"digite la potencia elevada del numero: ";
 	cin>>exponente;
 }
 void funpot(int x,int y){
 	long resultado=1;
 	for(int i=1;i<=y;i++){
 	resultado*=x;
	 }
	 cout<<"El resultado es: "<<resultado<<endl;
 }
 
 
