package clases;
import java.util.Scanner;
public class NuevoHola {
    
    private String nombre;
    //para inicializar la variable (objeto de tipo String)
    //usamos el metodo constructor
    public NuevoHola(String nombre) {
        this.nombre = nombre;
    }
    
    public void saludo () {
        System.out.println("Hola desde java desde sts de nuez " + this.nombre);
    }
    
    public void saludoConNombreString(String nom) {
        System.out.print("Hola tu eres: " + nom);
        
    }
    
}