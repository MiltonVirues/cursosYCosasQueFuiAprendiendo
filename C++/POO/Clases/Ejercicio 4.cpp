#include<iostream>
#include<stdlib.h>
using namespace std;

class animal{
private:
	int edad;
public:
	animal(int);
	virtual void comer();
};
class humano : public animal{
private:
	string nombre;
public:
	humano(int,string);
    void comer();
};
class perro : public animal{
private:
string nombre,raza;
public:
	perro(int,string,string);
    void comer();
};
animal::animal(int _edad){
edad=_edad;
}
humano::humano(int _edad,string _nombre):animal(_edad){
nombre=_nombre;
}
perro::perro(int _edad,string _nombre,string _raza):animal(_edad){
nombre=_nombre;
raza=_raza;
}
void animal::comer(){
cout<<"Yo como"<<endl;
}
void humano::comer(){
	animal::comer();
cout<<"en una mesa, en su silla"<<endl;
}
void perro::comer(){
	animal::comer();
cout<<"en el suelo, en su plato"<<endl;
}
int main(){
animal *animales[2];
animales[0]= new perro(5,"messi","Bulldog");
animales[1]= new humano(18,"goku"); 
animales[0]->comer();
animales[1]->comer();


	system("pause");
	return 0;
}