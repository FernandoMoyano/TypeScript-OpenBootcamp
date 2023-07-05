import { Curso } from "./Curso";

export class Estudiante {
  //propiedads de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];
  private ID: string = "123456";

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
  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }

  //podemos acceder a la propiedad ID porque estamos dentro del ambito de clase
  get ID_Estudiante(): string {
    return this.ID;
  }
  //seteamos el id
  set ID_Estudiante(id: string) {
    this.ID = id;
  }
}
