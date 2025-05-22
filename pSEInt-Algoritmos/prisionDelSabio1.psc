Algoritmo prisionDelSabio1
	//Defino valores
	definir fibonacci,num Como Entero;
	definir decenadmil,unidmil,cent,dec,un,i Como Entero;
	definir numFinal Como Entero;
	Definir flag Como Logico;
	dimension fibonacci[25];
	
	flag <- falso; 
	i<-2;
	//Defino el valor de las primeras posiciones de la serie de fibonacci
	fibonacci[0] <- 1;
	fibonacci[1] <- 1;
		
		Mientras no flag Hacer
			fibonacci[i] <- fibonacci[i-1] + fibonacci[i-2];
			Si fibonacci[i] >= 10000 Entonces
				num<-fibonacci[i];
				flag<-Verdadero;
			SiNo
				i<-i+1;
			FinSi
		FinMientras
		
	decenadmil <- trunc(num/10000);
	unidmil <- trunc(num MOD 10000/1000);
	cent <- trunc(num MOD 1000/100);
	dec <- trunc(num MOD 100/10);
	un <- num mod 10;
	numFinal <- fibonacci[decenadmil] + fibonacci[unidmil] + fibonacci[cent] + fibonacci[dec] + fibonacci[un];
	Escribir "El resultado es: ",numFinal;
FinAlgoritmo
