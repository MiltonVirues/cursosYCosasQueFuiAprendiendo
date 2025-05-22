package com.mycompany.ejemploinsercion;

import java.util.Scanner;
import javax.swing.JOptionPane;

/**
 *
 * @author NoxiePC
 */
public class EjemploInsercion {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int arreglo[], nElementos,pos,aux;
        
        nElementos = Integer.parseInt(JOptionPane.showInputDialog("Digite el numero de elementos del arreglo: "));
        
        arreglo = new int [nElementos];
        
        System.out.println("Digite el arreglo: ");
        for(int i=0;i<nElementos;i++){
            System.out.println((i+1)+"Digite un numero: ");
            arreglo[i]=entrada.nextInt();
        }
        //Ordenamiento por Insercion
        for(int i=0;i<nElementos;i++){
            pos = i;
            aux = arreglo[i];
           while((pos>0) && (arreglo[pos-1] > aux)){//Cuando utilizamos el ordenamiento por insercion y llegamos al primer elemento, no podemos comprobarlo con nada. Por eso ponemos esta condicional para evitar futuros problemas. Y que el numero a l izquierda sea mayor que el numero actual
               arreglo[pos] = arreglo[pos-1];
               pos--; //El numero va a seguir comprobando hasta la posicion 0, por eso decrementa
           }
           arreglo[pos] = aux; //Refrescamos el numero actual
        }
        
        System.out.println("Arreglo en orden ascendente: ");
        for(int i=0;i<nElementos;i++){
            System.out.print(arreglo[i]+" - ");
        }
        System.out.println(" ");
        
        System.out.println("Orden descendente: ");
        for(int i=(nElementos-1);i>=0;i--){
            System.out.print(arreglo[i]+" - ");
        }
        System.out.println(" ");
    }
}
