export class Curso {
  nombre: string;
  horas: number;

  constructor(nombre: string, horas: number) {
    this.nombre = nombre;
    this.horas = horas;
  }
}

//Exportacion por defecto nos permite importarlo con cualquier nombre
//export default Curso;
