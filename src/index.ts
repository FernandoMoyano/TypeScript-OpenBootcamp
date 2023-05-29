import { log } from "console";
import { prototype } from "events";

console.log("Hola Martin");

//esto es uncomentario tanto para js como ts

/* declaracion de variables: */
var nombre: string = "Fernando"; //indicamos el tipo de variable
console.log(`Hola ${nombre}`);

let email = "fernandomoyano21@gmail.com";
console.log(`El email de ${nombre} es ${email}`);

//tipo "number"
const PI: number = 3.1416;

//Tipo "any" hace que la variable pueda cambiar de tipo
var apellidos: any = "San Jose";
apellidos = 3;
console.log(apellidos);

var error: boolean;
error = false;
console.log(`¿Hay error? ${error}`);

/* Instaciacion multiple de variables */

//Instancia 3 variables sin valor
let a: string, b: boolean, c: number;

a = "Typescript";
b = true;
c = 9;

//BuiltIn Types: number, string, boolean, void, null y undefined

//Tipos mas complejos

//listas de cadenas de texto
let listaTareas: string[] = ["trea 1", "Tarea 2"];

//combinacion de tipos de listas
let valores: (string | number | boolean)[] = [false, "hola", true, 56];

//Enumerados
enum Estados {
	"Completado" = "C",
	"Incompleto" = "I",
	"Pendiente" = "P",
}

enum PuestoCarrera {
	"Primero" = 1,
	"segundo",
	"tercer",
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.segundo;

interface Tarea {
	nombre: string;
	estado: Estados;
	urgencia: number;
}

//Podemos crear variables que sigan la interface tarea
let tarea1: Tarea = {
	nombre: "Tarea 1",
	estado: Estados.Pendiente,
	urgencia: 10,
};

console.log(`tare:${tarea1.nombre}`);

//Asignacion multiple de variables

let miTarea = {
	nombreTarea: "Mi tarea",
	estado: Estados.Completado,
	urgencia: 1,
};

let { nombreTarea, estado, urgencia } = miTarea;

//FACTOR DE PROPAGACIÓN
//En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: boolean[] = [false];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];

//En objetos
let estadoApp = {
	usuario: "admin",
	session: 3,
	jwt: "389475829nnbldnfb",
};

//Cambiar un valor por propagación
let nuevoEstado = {
	...estadoApp,
	sesion: 4,
};

//TIPOS de typescript

type Producto = {
	precio: number;
	nombre: string;
	anio: number;
};

let coche: Producto = {
	nombre: "Audi",
	precio: 45000,
	anio: 2010,
};

//CONDICIONALES
//operador Ternario
console.log(
	coche.anio < 2010
		? `Coche:${coche.nombre} es viejo`
		: `Coche:${coche.nombre} es nuevo`,
);

//If-else

if (error) {
	console.log("Hay un error");
} else {
	console.log("No hay un error");
}

//if -else if -else

if (coche.anio < 2010) {
	console.log(`Coche:${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
	console.log(`Coche:${coche.nombre} es del 2010`);
} else {
	`Coche:${coche.nombre}es nuevo`;
}

//Switch

switch (tarea1.estado) {
	case Estados.Completado:
		console.log("La Tarea está completada");
		break;
	case Estados.Incompleto:
		console.log("La Tarea no está completada");
		break;
	case Estados.Pendiente:
		console.log("La Tarea no está pendiente de comprobarse");
		break;
	default:
		break;
}

//Bucles

let listaTareasNuevas: Tarea[] = [
	{
		nombre: "Tarea 1",
		estado: Estados.Completado,
		urgencia: 2,
	},
	{
		nombre: "Tarea 2",
		estado: Estados.Pendiente,
		urgencia: 0,
	},
	{
		nombre: "Tarea 3",
		estado: Estados.Incompleto,
		urgencia: 1,
	},
];

//FOR CLÁSICO
for (let index = 0; index < listaTareasNuevas.length; index++) {
	const tarea = listaTareasNuevas[index];
	console.log(`${index}-${tarea.nombre}`);
}

//FOR EACH
listaTareasNuevas.forEach((tarea: Tarea, index: number) => {
	console.log(`${index}-${tarea.nombre}`);
});

//WHILE
while (tarea1.estado !== Estados.Completado) {
	tarea1.urgencia++;
	if (tarea1.urgencia == 5) {
		tarea1.estado = Estados.Completado;
	} else {
		tarea1.urgencia++;
	}
}

//DO WHILE(se ejecuta al menos una vez)
do {
	tarea1.urgencia++;
	tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);

//FUNCIONES

/**
 * Funcion ue muestra un saludo por consola
 */
function Saludar() {
	let nombre = "Fernando";
	console.log(`¡Hola,${nombre}`);
}
//Invocacion de la función
Saludar();

/**
 * funcion que muestra por consola el saludo a una persona.
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
	console.log(`¡Hola,${nombre}`);
}
saludarPersona("Martin");

/**
 * funcion que muestra por consola el saludo a una persona.
 * @param nombre Nombre de la persona a saludar, por defecto sera Pepe
 */
function despedirPersona(nombre: string = "Pepe") {
	console.log(`¡Adiós,${nombre}`);
}
despedirPersona(); //Adios Pepe

/**
 * funcion que muestra por consola el saludo a una persona.
 * @param nombre (opcional) Nombre de la persona a saludar
 */
function despedidaOpcional(nombre?: string) {
	if (nombre) {
		console.log(`¡Hola,${nombre}`);
	} else {
		console.log("Adiós!");
	}
}
despedidaOpcional(); //Adios
despedidaOpcional("Fernando"); //¡Adiós Fernando!

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
	if (apellidos) {
		console.log(`${nombre} ${apellidos} tiene ${edad} años`);
	} else {
		console.log(`${nombre} tiene ${edad} años`);
	}
}
variosParams("Fernando"); //Fernando tiene 18 años.
variosParams("Fernando", "San Jose"); //Fernando San Jose tiene 18 años.
variosParams("Fernando", undefined, 30); //Martin tiene 18 años.
variosParams("Fernando", "San Jose", 30); //Fernando San Jose tiene 18 años.

function ejemploVariosTipos(a: string | number) {
	if (typeof a === "string") {
		console.log("A es u string");
	} else if (typeof a === "number") {
		console.log("A es un number");
	} else {
		console.log("A no es string ni tampoco number");
		throw Error("A no es un string ni un number");
	}
}


ejemploVariosTipos("Hola");//return text
ejemploVariosTipos(3);//return number