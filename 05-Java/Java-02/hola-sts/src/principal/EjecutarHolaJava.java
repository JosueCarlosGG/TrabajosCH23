package principal;

import clases.HolaJava;

public class EjecutarHolaJava{

	public static void main(String[] josue) {
		// TODO Auto-generated method stub
		//metodo 1 traer la clase HolaJava y lo convertes a obj
		HolaJava objHJ;
		//reasignacion le asignas el valor de HolaJava
		objHJ = new HolaJava();
		//llamada
		objHJ.saludo();
		
		//metodo corto
		HolaJava objHJ1 = new HolaJava();
		objHJ1.saludo();
	}

}