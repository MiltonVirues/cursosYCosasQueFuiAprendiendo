#include <iostream>
#include <stdlib.h>
using namespace std;

class persona{
private:
	string nombre;
	int edad;
public:
	persona(string,int);
	virtual void mostrar();
};
class alumno : public persona{
private:
	float: notaFinal;
public:
alumno(string,int,float);
void mostrar();
};
class profesor : public persona{
private:
string materia; 
public: 
	profesor(string,int,string);
	void mostrar();
};
persona::persona(string _nombre,int _edad){
	nombre=_nombre;
	edad=_edad;
}
alumno::alumno(string _nombre,int _edad,float _notaFinal):persona(_nombre,_edad){
notaFinal=_notaFinal;	
}
profesor::profesor(string _nombre,int _edad,string _materia):persona(_nombre,_edad){
materia=_materia;	
}
void persona::mostrar(){
	cout<<"Nombre: "<<nombre<<endl;
	cout<<"Edad: "<<edad<<endl;
}
void alumno::mostrar(){
persona::mostrar();
cout<<"Nota Final: "<<notaFinal<<endl;	
}
void profesor::mostrar(){
persona::mostrar();
cout<<"Materia: "<<materia<<endl;	
}
int main(){
persona *vector[3];
vector[0]= new alumno("Milton",17,9);
vector[1]= new alumno("Messi",35,10);
vector[2]= new profesor("Alejandro",20,"Algoritmos");
 vector[0]->mostrar();
 cout<<"\n";
 vector[1]->mostrar();
 cout<<"\n";
vector[2]->mostrar();


	system("pause");
	return 0;
}