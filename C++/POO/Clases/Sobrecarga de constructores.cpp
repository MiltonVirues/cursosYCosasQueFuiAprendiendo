#include <iostream>
#include <stdlib.h>

class Fecha{
private: //Atributos
	int dia,mes,anio;
	public: //Metodos
		Fecha(int,int,int); //Constructor1
	    Fecha(long);
	    void mostrarFecha();	
};

//Constructor1 
Fecha::Fecha(int _dia, int _mes,int _anio){
	anio=_anio;
	mes=_mes;
	dia=_dia;
}
Fecha::Fecha(long fecha);
anio=int(fecha/10000); //Extraer el anio
mes=int((fecha-anio*10000)/100); //Extraer el mes
dia=int(fecha-anio*10000-mes*100); //Extraer el dia
void Fecha::mostrarFecha(){
	cout<<"La fecha es"<<dia<<"/"<<mes<<"/"<<anio<<endl;
}


int main(int argc, char const *argv[])
{
	Fecha hoy(02,03,2023);
	Fecha ayer(20230301)
	hoy.mostrarFecha();
	system("pause");
	return 0;
}