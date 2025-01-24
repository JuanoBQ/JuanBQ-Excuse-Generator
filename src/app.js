let sujeto = [
  "Mi jefe",
  "Mi vecino",
  "Mi perro",
  "Mi abuela",
  "Mi hijo",
  "El cartero",
  "La profesora",
  "Mi amigo",
  "El gato",
  "Un desconocido"
];
let accion = ["robó", "comió", "rompío", "quemó", "perdió", "mojó"];
let objeto = [
  "mi tarea",
  "mi celular",
  "mi informe",
  "mis llaves",
  "mi pantalon",
  "mi computador"
];
let contexto = [
  "esta mañana!",
  "mientras dormía!",
  "antes de la cita!",
  "antes de la clase!",
  "durante el almuerzo!"
];

let sujetoRandom = Math.floor(Math.random() * sujeto.length);
let accionRandom = Math.floor(Math.random() * accion.length);
let objetoRandom = Math.floor(Math.random() * objeto.length);
let contextoRandom = Math.floor(Math.random() * contexto.length);

function excusaGenerada() {
  return (
    sujeto[sujetoRandom] +
    " " +
    accion[accionRandom] +
    " " +
    objeto[objetoRandom] +
    " " +
    contexto[contextoRandom]
  );
}

document.querySelector("#excuse").innerHTML = excusaGenerada();
