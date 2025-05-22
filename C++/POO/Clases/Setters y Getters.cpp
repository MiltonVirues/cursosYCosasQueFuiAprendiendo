//Set= dar o establecer valores a nuestros atributos, podrias hacerlo con un costructor convencional pero estos valores no se establecerian de golpe
//Get=Dar o mostrar informacion que tienen almacenada nuestras variables
#include <iostream>
#include <stdlib.h>
 using namespace std;
class Punto(){
private:
	int x,y;
public:
	Punto();//Constructor
	void setPunto(int,int);
	int getPuntoX();
	int getPuntoY();
};
Punto::Punto(){//Constructor
}
Punto::getPuntoX(){//En el caso del get solo se puede hacer de una variable ala vez ya que la funcion solo puede retornar una.
	return x;
}
Punto::getPuntoY(){
	return y;
}

Punto::setPunto(int _x,int _y){//Establecemos valores de los atributos 
x=_x;
y=_y;
}



int main(){
Punto punto1;

punto1.setPunto(15,10); //esto funcionaria con el set, pero no podrias imprimir los valores en pantalla, para eso esta el Get*/
cout<<punto1.getPuntoX()<<endl;
cout<<punto1.getPuntoY()<<endl;
	system("pause");
	return 0; 
}