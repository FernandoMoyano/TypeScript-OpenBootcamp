console.log("Hola Martin")

//esto es uncomentario tanto para js como ts
 
/* declaracion de variables: */
var nombre: string ="Fernando";//indicamos el tipo de variable
console.log(`Hola ${nombre}`);

let email="fernandomoyano21@gmail.com";
console.log(`El email de ${nombre} es ${email}`);


//tipo "number"
const PI:number=3.1416;

//Tipo "any" hace que la variable pueda cambiar de tipo
var apellidos:any="San Jose";
apellidos=3;
console.log(apellidos);

var error:boolean;
error=false;
console.log(`¿Hay error? ${error}`);

/* Instaciacion multiple de variables */

//Instancia 3 variables sin valor
let a:string,b:boolean,c:number;

a="Typescript";
b=true;
c=9;