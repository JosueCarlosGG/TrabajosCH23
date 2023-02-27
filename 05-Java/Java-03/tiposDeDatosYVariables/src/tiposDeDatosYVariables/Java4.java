package tiposDeDatosYVariables;

public class Java4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//&& and 
		int edad = 18;
		boolean tieneLicencia = true;
		if (edad >= 18 && tieneLicencia) {
		    System.out.println("Puede conducir un coche");
		} else {
		    System.out.println("No puede conducir un coche");
		}
		
		//or ||
		String nombre = "Juan";
		String apellido = "Pérez";
		if (nombre.equals("Juan") || apellido.equals("Pérez")) {
		    System.out.println("El usuario es Juan Pérez");
		} else {
		    System.out.println("El usuario no es Juan Pérez");
		}
		
		//!
		boolean esVerdadero = true;
		if (!esVerdadero) {
		    System.out.println("La condición es falsa");
		} else {
		    System.out.println("La condición es verdadera");
		}
		
		
		
			//Verificar si un número es par y positivo:
			int numero = 6;
		
	        if (numero % 2 == 0 && numero > 0) {
	            System.out.println(numero + " es un numero par y positivo");
	        } else {
	            System.out.println(numero + " el numero no cumple con los requerimientos");
	        }

			//Verificar si un número está dentro de un rango específico
			int num = 10;
			
			if (num > 0 && numero < 11) {
	            System.out.println(num + " esta en el rango solicitado");
	        } else {
	            System.out.println(num + " no esta en el rango solicitado");
	        }

			//Verificar si una cadena es igual a otra o no
			String cadena1 = "Hola";
			String cadena2 = "hola";
			
			if(cadena1 == cadena2){
			    System.out.println("Los Strings son iguales");
			} else {
			    System.out.println("Los Strings son diferentes");
			}
			
			

	}

}
