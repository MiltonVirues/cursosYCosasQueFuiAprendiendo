/*El destructor es un metodo no muy utilizado ya que al finalizar tu programa la clase se elimina sola
con el fin de ahorrar memoria */
#include <iostream>
#include <stdlib.h>
using namespace std;

class Perro{
private://Atributos 
	string nombre,raza;

public://Metodos 
Perro(string,string);//Constructor
~Perro();//Destructor
void mostrarDatos();
void jugar();
};

Perro::Perro(string _nombre,string _raza){
nombre=_nombre;
raza=_raza;
}
Perro::~Perro(){

}
void Perro::mostrarDatos(){
	cout<<"El nombre del perro es: "<<nombre<<endl;
	cout<<"La raza del perro es: "<<raza<<endl;
}
void Perro::jugar(){
	cout<<"El perro"<<nombre<<"esta jugando"<<endl;
}
int main(){


Perro perro1("messi","RodWailler");
perro1.mostrarDatos();
perro1.jugar();
perro1.~Perro();

	system("pause");
	return 0;
}