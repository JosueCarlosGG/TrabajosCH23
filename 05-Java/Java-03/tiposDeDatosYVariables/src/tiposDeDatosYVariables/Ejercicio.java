package tiposDeDatosYVariables;

public class Ejercicio {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int num1 = 5;
		int num2 = 15;
		int num3 = 25;
		
		int multi = num1 * num2;
		int modul = multi % num3;
		
		System.out.println(multi);
		System.out.println(modul);
		
		boolean a = true;
		boolean b = true;
		
		System.out.println(a == b);
		
		double y = 3.14;
		double z = 1.1;
		
		System.out.println(y < z);
		System.out.println(y == 1);
		
		int fahrenheit = 119;
        double celsius = (fahrenheit - 32) / 1.8;
        double kelvin = celsius + 273.15;

        System.out.println("fahrenheit a celsius " + celsius);
        System.out.println("celsius a kelvin es " + kelvin);
		
        int numero = 8;
        
        if (numero % 2 == 0) {
            System.out.println(numero + " es un num par");
        } else {
            System.out.println(numero + " es un num impar");
        }
		
	}

}
