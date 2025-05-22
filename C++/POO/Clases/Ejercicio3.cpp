#include <iostream>
#include <stdlib.h>
using namespace std;

class Persona{
private: 
	string nombre;
	int edad; 
public:
	Persona(string,int);
	void mostrarPersona();
};
class Empleado : public Persona{
private:
	float salario;
public:
	Empleado(string,int,float);
	void mostrarEmpleado();
};
class Estudiante : public Persona{
private: 
	float notaFinal; 
public: 
	Estudiante(string,int);
	void mostrarEstudiante();
};
class Universitario : public Estudiante{
private: 
	string carrera;
public:
	Universitario(string,int,float,string);
	void mostrarUniversitario();
};
Persona::Persona(string _nombre,int _edad){
edad=_edad;
nombre=_nombre;
}
Empleado::Empleado(string _nombre,int _edad,float _salario) : Persona(_nombre,_edad){
salario=_salario;
} 
Estudiante::Estudiante(string _nombre,int _edad,float _notaFinal):Persona(_nombre,_edad){
notaFinal=_notaFinal;
}
Universitario::Universitario(string _nombre,int _edad,float _notaFinal,string _carrera):Estudiante(_nombre,_edad,_notaFinal){
carrera=_carrera;	
}
void Persona::mostrarPersona(){
cout<<"El nombre es: "<<nombre<<endl;
cout<<"Su edad es: "<<edad<<endl;
}
void Empleado::mostrarEmpleado(){
	mostrarPersona();
	cout<<"Su salario es: "<<salario<<endl;
}
void Estudiante::mostrarEstudiante(){
	mostrarPersona();
	cout<<"Su nota final es: "<<notaFinal<<endl;
}
void Universitario::mostrarUniversitario(){
	mostrarEstudiante();
	cout<<"carrera: "<<carrera<<endl;
}


int main(){
Empleado empleado1("messi",36,1000);
Estudiante estudiante1("Fernando",16,8.5);
Universitario universitario1("Hernan",20,9,"Ingeniero En Sistemas");
cout<<"_-Empleado-_"<<endl;
empleado1.mostrarEmpleado();
cout<<"\n"<<endl;
cout<<"_-Estudiante-_"<<endl;
estudiante1.mostrarEstudiante();
cout<<"\n"<<endl;
cout<<"_-Universitario-_"<<endl;
universitario1.mostrarUniversitario();
cout<<"\n"<<endl;


system("pause");
return 0; 
}