
      let numeroDia = Number(prompt("introduzca un numero de dia de la semana: "));
      let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

      if (numeroDia >= 0 && numeroDia <= 6) {
        console.log(diasSemana[numeroDia]);
      } else {
        console.log("Inválido");
      }
  