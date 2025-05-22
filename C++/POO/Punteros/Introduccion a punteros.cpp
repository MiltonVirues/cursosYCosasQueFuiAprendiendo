/* Punteros - Declaracion de Punteros

&n = La direccion de memoria n
*n = La variable cuya direccion esta almacenada en n(valor de la variable que le asignaste)

*/
#include<iostream>
#include<conio.h>
using namespace std;

int main(){
	int num,*dir_num;
	num=20;
	dir_num=&num;
	cout<<"Numero: "<<*dir_num<<endl;
	cout<<"Direccion de memoria: "<<dir_num<<endl;
}
