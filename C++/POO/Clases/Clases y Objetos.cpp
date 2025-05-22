//Clases en C++
#include <iostream>
#include <stdlib.h>
using namespace std;

class persona{
private: //Atributos
	int edad;
	string nombre;
public: //Metodos
	
	persona(int,string);//Constructor
	void leer();
	void correr();
};
//Inicializando el metodo constructor
//Metodo constructor: nos ayuda a inicializar nuestros atributos
persona::persona(int _edad,string _nombre){
	edad=_edad;
	nombre=_nombre;
}
void persona::leer(/*No hace falta pasarle parametros a los metodos, ya que la clase sabe a que nos estamos refiriendo */){
	cout<<"Soy "<<nombre<<" y estoy leyendo"<<endl;
}
void persona::correr(){
	cout<<"Soy "<<nombre<<" y estoy corriendo"<<endl;
}
int main(){
//Para inicializar una variable de tipo clase,"o instanciar una clase" ay dos maneras:
	/*La manera larga:
	persona p1=persona(20,"Alejandro"); 
	p1.leer(); la sintaxis de como ejectuar una clase es parecida a una estructura*/
	/*La manera corta: 
	persona p2(19,"Maria");
persona p3(21,"Carlos");
	p2.correr();
	p3.leer();
	p3.correr();*/

	system("pause");
	return 0;
}