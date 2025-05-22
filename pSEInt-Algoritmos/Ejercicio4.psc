Algoritmo Ejercicio4
		Definir num1, num2, i, j Como Entero;
		Definir sum1, sum2 Como Entero;
		
		Para num1 <- 1000 Hasta 9999 Con Paso 1 Hacer
			sum1 <- 0;
			Para i <- 1 Hasta num1 / 2 Con Paso 1 Hacer
				Si (num1 mod i == 0) Entonces
					sum1 <- sum1 + i;
				FinSi
			FinPara
			
			Si (sum1 > num1 Y sum1 <= 9999) Entonces
				num2 <- sum1;
				sum2 <- 0;
				Para j <- 1 Hasta num2 / 2 Con Paso 1 Hacer
					Si (num2 mod j == 0) Entonces
						sum2 <- sum2 + j;
					FinSi
				FinPara
				
				Si (sum2 == num1) Entonces
					Escribir "Números amigos: ", num1, " y ", num2;
				FinSi
			FinSi
		FinPara
FinAlgoritmo
