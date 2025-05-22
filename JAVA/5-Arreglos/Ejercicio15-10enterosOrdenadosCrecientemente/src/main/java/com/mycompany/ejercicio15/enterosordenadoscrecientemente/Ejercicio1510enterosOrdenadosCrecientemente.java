package com.mycompany.ejercicio15.enterosordenadoscrecientemente;

import java.util.Scanner;

/*

    Ejercicio 15 : Leer 10 enteros ordenados crecientemente. Leer N y buscarlo en la tabla. Se debe mostrar en la posicion que se encuentra.
                         Si no esta indicarlo con un mensaje.

*/
public class Ejercicio1510enterosOrdenadosCrecientemente {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int arreglo[] = new int[10]; //Defino el arreglo
        int n,c;  //Definimos variables
        for(int i=0;i<10;i++){ //Apartir de un bucle pido al usuario los 10 numeros
            System.out.println((i+1)+". Digite un numero: ");
            arreglo[i]=entrada.nextInt();
        }
        System.out.println("Digite el numero que desea buscar: ");
        n = entrada.nextInt();
        c=0;
        boolean encontrado = false; //Creamos esta variable para verificar dentro de un condicional si el numero fue encontrado dentro
        int posicion = -1; //el -1 es utilizado como un atajo por si no encontramos el numero dentro del arreglo, en el que una vez encontrado dentro del condicional, se le asigna el valor de i

        // Buscamos el numero en el arreglo
        for (int i = 0; i < 10; i++) {
            if (arreglo[i] == n) {
                encontrado = true; //Indicamos que fue encontrado con "true"
                posicion = i; //Le asignamos un nuevo valor a "posicion"
                break; //Rompemos el bucle
            }
        }

        if (encontrado) {
            System.out.println("La posicion del numero en el arreglo es: " + posicion);
        } else {
            System.out.println("El numero digitado no se encuentra dentro del arreglo");
        }
    }
}
