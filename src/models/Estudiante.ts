import { Curso } from "./Curso";

export class Estudiante {
  //propiedads de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  //constructor;
  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    //inicializamos las propiedades, las propiedades opcionales siempre van al final
    this.nombre = nombre;
    //this.apellidos = apellidos ? apellidos : undefined;
    //Otra opcion de validar
    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }

  //Propiedad horas estudiadas
  get horasEstudiadas() {
    let horasDeEstudio = 0;
    this.cursos.forEach((curso: Curso) => {
      horasDeEstudio += curso.horas;
    });
    return horasDeEstudio;
  }
}
