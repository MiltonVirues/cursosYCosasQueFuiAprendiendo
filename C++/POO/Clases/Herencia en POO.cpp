//Herencia en POO
#include <iostream>
#include <stdlib.h>
using namespace std;

class persona{
private://Atributos 
	string nombre;
	int edad;
public://Metodos
	persona(string,int);//Constructor
	void mostrarDatos();
};
class Alumno : public persona{
//para poder acceder a los datos "private" de la clase padre, la clase padre en vez de private tendria que tener "protected"
private:
	string codigoAlumno; 
	float notaFinal;
public:
	Alumno(string,int,string,float);
	void mostrarAlumno();
};


persona::persona(string _nombre,int _edad){//Constructor(Clase Padre)
nombre=_nombre;
edad=_edad
}
Alumno::Alumno(string _nombre,int _edad,string _codigoAlumno,float _notaFinal) : persona(_nombre,_edad){
codigoAlumno=_codigoAlumno;
notaFinal=_notaFinal;	
}
void persona::mostrarDatos(){
	cout<<"Nombre: "<<nombre<<endl;
	cout<<"edad: "<<edad<<endl;
}
void Alumno::mostrarAlumno(){
mostrarDatos();
cout<<"El codigo de alumno es: "<<codigoAlumno<<endl;
cout<<"Su nota final: "<<notaFinal<<endl;	
}

int main(){
Alumno alumno1("Milton",17,"2134213415",12.3);

alumno1.mostrarAlumno();

	system("pause");
	return 0; 
}