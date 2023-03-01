package principal;
import java.util.Scanner;
public class TestOrdenTres {
	
	    public static void main(String[] args) {
	        Scanner numero = new Scanner(System.in);

	        System.out.print("Ingrese el primer numero: ");
	        int num1 = numero.nextInt();
	        System.out.print("Ingrese el segundo numero: ");
	        int num2 = numero.nextInt();
	        System.out.print("Ingrese el tercer numero: ");
	        int num3 = numero.nextInt();

	        int temp;
	        if 
	        (num1 > num2) {
	            temp = num1;
	            num1 = num2;
	            num2 = temp;
	        }
	        
	        if 
	        (num2 > num3) {
	            temp = num2;
	            num2 = num3;
	            num3 = temp;
	        }
	        
	        if 
	        (num1 > num2) {
	            temp = num1;
	            num1 = num2;
	            num2 = temp;
	        }
	        

	       
	        System.out.println("Los numeros de menor a mayor son: " + num1 + ", "  + num2 + ", "  + num3);
	    }
	}
