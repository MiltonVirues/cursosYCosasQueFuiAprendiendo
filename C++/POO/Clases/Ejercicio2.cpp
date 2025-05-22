/* Ejercicio 2: Construya una clase Tiempo que contenga los siguientes 
atributos enteros: horas, minutos y segundos. Haga que la clase contenga 2 cosntructores,
el primero debe tener 3 parametros Tiempo(int,int,int) y el segundo solo tendra un campo
que seran los segundos y desensanble el numero entero largo en horas, minutos y segundos. */

#include<iostream>
#include<stdlib.h>
using namespace std;
class Tiempo{
private://Atributos
	int horas,minutos,segundos;
public: //Metodos
	Tiempo(int,int,int);//Constructor1
	Tiempo(int);//Constructor2
	void mostrarTiempo();
};
Tiempo::Tiempo(int _horas,int _minutos,int _segundos){//Constructor1
	horas=_horas;
	minutos=_minutos;
	segundos=_segundos;
}
Tiempo::Tiempo(int tiempoSeg){//Constructor2
horas= tiempoSeg/3600;
tiempoSeg %= 3600;
minutos=tiempoSeg/60;
segundos=tiempoSeg %60;
}
Tiempo:: void mostrarTiempo(){
cout<<"La hora es"<<horas<<"/"<<minutos<<"/"<<segundos<<endl;
}

int main(){
Tiempo tiempoActual(16,23,30);
Tiempo tiempoAnterior(55410);
tiempoActual.mostrarTiempo();
tiempoAnterior.mostrarTiempo();
	system("pause");
	return 0;
}