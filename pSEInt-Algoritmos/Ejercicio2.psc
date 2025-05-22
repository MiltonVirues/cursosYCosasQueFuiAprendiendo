Algoritmo Ejercicio2
	
	Definir a Como entero;
	Definir i Como Entero;
	Definir suma Como Entero;
	Definir flag Como Logico;
	i<-1;
	a<-1000;
	suma <- 0;
	flag<-falso;
	
		Mientras ((NO flag) Y a <= 9999) Hacer
			suma <- 0;
				Para i<-1 Hasta a/2 Con Paso 1 
					Si ( a MOD i == 0)
						suma <- suma + i;
					FinSi
				FinPara
				Si(suma == a)
					Escribir "El numero perfecto es: ", suma;
					flag<-verdadero;
				FinSi
			a<-a+1;
		FinMientras

FinAlgoritmo
