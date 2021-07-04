// Ejercicio 1
import {} from "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log("Ejercicio 2");
console.log("Lo primero en ejecutarse fue el contenido del archivo aboutme.js, posterior a la ejecución de esté se ejecuto el contenido del Index.js")
// Ejercicio 3
console.log("Ejercicio 3");
let devToolConsole = `Consola: Esta herramienta nos permite ver los errores en el momento que suceden o el tipo de error, esto es de gran ayuda a la hora de depurar nuestro código.`;
let devToolElements =` Element: Nos muestra una versión renderizada del código HTLM del codigo fuente de la página web en desarrollo. Esta herramienta nos ayuda a inspeccionar a detalle algún elemento especifica de la página.`;
let devToolSources = `Sources: Esta herramienta nos ayuda a visualizar el Código fuente de una página, también nos permite usar breackpoints para depurar el código y así encontrar los errores más rápido`;

let devTools =` ${devToolSources}\n`+
` ${devToolElements} \n `+
` ${devToolConsole}`;
console.log(devTools);
// Ejercicio 4
console.log("Ejercicio 4");
console.log("Numeros entre 1 al 100 que son divisibles por 7: ")
function PrintDividirX7(){
    for(let i = 1; i <= 100; i++){
      if(i%7 == 0){
        console.log(i);
      }
    }
}
PrintDividirX7();
// Ejercicio 5
console.log("Ejercicio 5");
console.log("Una de las diferencias que existe entre  el formato  <script> y en el formato <script type=”module”> es el scope que tienen, en un script con el formato <script> si se crea una variable o función dentro de un modulo <script>, se pueden utilizar en otro modulo, en cambio en el otro formato, solo se pueden utilizar dentro del mismo modulo. ");

// Ejercicio 6
let formatter = {
    prefix : 'Hello',
    append : function(str){
        console.log( `${this.prefix}${str}`);
    },
    toLowerCase: function(str2){
        console.log( `${str2.toLowerCase()}`);
    }
    };
console.log(formatter.append(" World!"));
console.log(formatter.toLowerCase("I'm Joshymar"));

