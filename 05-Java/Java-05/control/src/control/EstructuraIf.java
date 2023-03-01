package control;


import java.util.Scanner;

public class EstructuraIf {
	Scanner entrada = new Scanner(System.in);
	public void controlIf() {
	// TODO Auto-generated method stub
		/*
		if (condition) {
			
		}*/
		long nota = 4;
		if (nota > 5) {
			System.out.println("Aprobaste");
		}
		
		System.out.println("continua el control de flujo...");
		/*
		if (condition) {
			
		} else {

		}*/
		
		if (nota > 5) {
			System.out.println("Aprobaste");
		} else {
			System.out.println("No Aprobaste");
		}
		System.out.println("continua el control de flujo...");
		
		
		
	}
	public void divisible() {
		System.out.print("introduzca un primer numero");
		int dato1 = entrada.nextInt();
		System.out.print("introduzca un segundo numero");
		int dato2 = entrada.nextInt();
		if (dato1 % dato2 == 0) {
			System.out.println(dato1 + " Es divisible entre " + dato2);
		}else {
			System.out.println(dato1 + " No es divisible entre " + dato2);
		}
		
	}
	public void comparar() {
		System.out.print("introduzca un primer numero");
		int valor1 = entrada.nextInt();
		System.out.print("introduzca un segundo numero");
		int valor2 = entrada.nextInt();
		
	if (valor1 > valor2) {
		System.out.print(valor1 + " es mayor a " + valor2);
	} else {
		System.out.print(valor2 + " es mayor a " + valor1);
	}
	}
	public void anidado() {
		// TODO Auto-generated method stub
		/*if (condition) {
			
		} else if (condition) {
			
		} else {
			
		} {

		}*/
		System.out.print("introduzca un primer numero");
		int numero = entrada.nextInt();
		
		if (numero > 0) {
			System.out.print(numero + " es positivo");
		} else if (numero < 0) {
			System.out.print(numero + " es negativo");
		}else{
			System.out.print(numero + " es neutro");
		}
		
		
	}
}
