Algoritmo Ejercicio1
	Definir x Como Entero;
	Definir y1 Como Entero;
	Definir z Como Entero;
	Definir num Como Entero;
	Definir suma Como Entero;
	Definir flag Como Logico;
	//Adivinar una conbinacion de 100-999
	num <- 100;
	suma <- 0;
	
	flag <- falso;
	Mientras (NO flag Y num <= 999) Hacer
		
		x <- trunc(num/100);
		y1 <- trunc(num mod 100/10);
		z <- ((num mod 100) mod 10);
		
		suma <- x^3 + y1^3 + z^3;
		
		Si num = suma Entonces
			Escribir "La clave del cofre es: ",num;
			flag <- verdadero;
		FinSi
		
		num <- num + 1; 
	FinMientras
FinAlgoritmo
