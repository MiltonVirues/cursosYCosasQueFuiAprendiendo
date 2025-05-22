package com.mycompany.ejercicio16.arreglosparanotasdeestudiantes;

import java.util.Scanner;

/*

    Ejercicio 16 : Queremos desarrollar una aplicacion que nos ayude a gestionar las notas de un centro educativo. Cada grupo (o clase) esta
                          compuesto por 5 alumnos. Se pide leer las notas del primer, segundo y tercer trimestre de un grupo. Debemos mostrar al final: 
                          -La nota media del grupo en cada trimestre
                          -Y la media del alumno que se encuentra en la posicion N (N se lee por teclado)

*/
public class Ejercicio16ArreglosParaNotasDeEstudiantes {

    public static void main(String[] args) {
            Scanner entrada = new Scanner (System.in);
            float primer[],segundo[],tercer[];
            float p=0,s=0,t=0,resultado1,resultado2,resultado3,promedioAlumno=0;
            int posicionAlumno;
            primer = new float[5];
            segundo = new float[5];
            tercer = new float[5];

         
            System.out.println("Digite las calificaciones del primer cuatrimestre: ");
            for(int i=0;i<5;i++){
                System.out.print("Digite la calificacion del alumno N."+(i+1)+" : ");
                primer[i]=entrada.nextFloat();
                while(primer[i]<0 || primer[i]>10){
                    System.out.println("Dato ingresado erroneo, porfavor ingrese una calificacion de [1-10]: ");
                    primer[i]=entrada.nextFloat();
                }
            }
            System.out.println("Digite las calificaciones del segundo cuatrimestre: ");
            for(int i=0;i<5;i++){
                System.out.print("Digite la calificacion del alumno N."+(i+1)+" : ");
                segundo[i]=entrada.nextFloat();
                while(segundo[i]<0 || segundo[i]>10){
                    System.out.println("Dato ingresado erroneo, porfavor ingrese una calificacion de [1-10]: ");
                    segundo[i]=entrada.nextFloat();
                }
            }
            System.out.println("Digite las calificaciones del tercer cuatrimestre: ");
            for(int i=0;i<5;i++){
                System.out.print("Digite la calificacion del alumno N."+(i+1)+" : ");
                tercer[i]=entrada.nextFloat();
                while(tercer[i]<0 || tercer[i]>10){
                    System.out.println("Dato ingresado erroneo, porfavor ingrese una calificacion de [1-10]: ");
                    tercer[i]=entrada.nextFloat();
                }
        }
            System.out.print("Digite al alumno que desea conocer su promedio [0-5]: ");
            posicionAlumno=entrada.nextInt();
            float r1=0;
            for(float num : primer){
                r1+=num;
            }
            float r2=0;
            for(float num : segundo){
                r2+=num;
            }
            float r3=0;
            for(float num : tercer){
                r3+=num;
            }
         resultado1=r1/5;
         resultado2=r2/5;
         resultado3=r3/5;
         if(posicionAlumno<5){
           promedioAlumno=primer[posicionAlumno]+segundo[posicionAlumno]+tercer[posicionAlumno];
           promedioAlumno/=3;
         }
         System.out.println("La media del 1 trimestre es: "+resultado1);
         System.out.println("La media del 2 trimestre es: "+resultado2);
         System.out.println("La media del 3 trimestre es: "+resultado3);
         System.out.println("Media del alumno N."+posicionAlumno+" es: "+promedioAlumno);
    }
}
