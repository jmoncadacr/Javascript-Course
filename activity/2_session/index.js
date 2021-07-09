// Ejercicio 1
console.log("Ejercicio 1");
let persona = {
  name : "Joshymar",
  age : 29,
  profession : "Desarrollador"
};
let imprimir = Object.keys(persona);
let printArray = (imprimir) =>{
  return imprimir;
}
console.log(printArray(imprimir));
// Ejercicio 2
console.log("Ejercicio 2");
let contextoGlobal = `Contexto global: Es el uso que se da desde un ambito global, es decir, que se puede utilizar desde cualquier funcion, se hace la referencia desde el objeto global.`;
let metodo =`Metodo: Desde un método que pertenece a un objeto, this hace referencia al propio objeto.`;
let funcion = `Función: El valor de this dependera del lugar en el que sea invocado, pero por defecto en una funcion, this hace referencia al objeto global de window`;
let funcionStrictMode = `Función strict mode: en el modo estricto el valor de this es undefined.`;
let funcionFlecha = `Función de flecha: En las funciones de flecha, el valor de this quedará asociado al valor del ambito o alcance en el que se crean.`;

console.log(contextoGlobal);

console.log(this === window) 

console.log(metodo);
  let personas = {
    nombre: 'Joshymar',
    saludo: function () { 
        return `Hola yo soy ${this.nombre}` 
    }
  }
  console.log(funcion);
  function fFuncion() {
    return this;
}
fFuncion();
console.log(funcionStrictMode);
function fStrictMode() {
  return this;
}
fStrictMode();

console.log(funcionFlecha);
let fFlecha = () => {
  return this;
}
fFlecha();

// Ejercicio 3
console.log("Ejercicio 3");

let strEntrada = "Hola mundo"
let invertirString = (str)=>{
  return str.split("").reverse().join("");
}
console.log(invertirString(strEntrada));
// Ejercicio 4
console.log("Ejercicio 4");
class Login{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
  login(){
    if(this.username === "admin" && this.password ==="passwd"){
      alert("User logged in");
    }
    else{
      alert("User or passwd incorrect");
    }
  }

}
let login = new Login("admin", "passwd");
let logbad = new Login("pepe", "bad")
login.login();
logbad.login();

// Ejercicio 5
console.log("Ejercicio 5");

document.getElementById("loginSuccess").addEventListener("click", () => {
  let login5 = new Login("admin", "passwd");
  login5.login();
});

document.getElementById("loginFailure").addEventListener("click", () => {
  let logbad5 = new Login("pepe", "bad");
  logbad5.login();
});

// Ejercicio 6
console.log("Ejercicio 6");

document.getElementById("loginSuccessAsync ").addEventListener("click",async() => {
  try{
    let rest = await loginWitUsername("admin", "passwd");
    alert(rest);
  }
  catch(err){
    alert("Ha ocurrido el siguiente error: " + err);
  }
});

document.getElementById("loginFailureAsync").addEventListener("click",async() => {

  try{
    let logbad6 = await loginWitUsername("pepe", "bad");
    alert(logbad6);
  }
  catch(err){
    alert("Ha ocurrido el siguiente error: " + err);
  }
  
});


let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
