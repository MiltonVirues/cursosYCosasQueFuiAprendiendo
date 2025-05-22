package com.mycompany.mavenproject2;

import java.util.Scanner;



//Practica buscar el numero mayor de un arreglo


public class Mavenproject2 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner (System.in);
        int suma=0,conteo=0;
        float promedio=0;
        int vector[] = new int[10];
        
        System.out.println("Digite los numeros para el arreglo: ");
        for(int i=0;i<10;i++){
            System.out.println((i+1)+". Digite un numero: ");
            vector[i]=entrada.nextInt();
            suma+=vector[i];
            conteo++;
        }
        promedio = (float) suma/conteo; //Pasamos a flotante el resultado de esta division
        System.out.println("El promedio es: "+promedio);
    }
}
