alert("bienvenidos a la calculadora de promedios ");
function pedirValorNoVacio(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje);
  } while (valor.trim() === "");
  return valor;
}

const usuarioAutorizado = pedirValorNoVacio("registre su usuario");
const contraseniaAutorizada = pedirValorNoVacio("registre su contraseña");

const usuario = pedirValorNoVacio("ingrese su usuario");
const contrasenia = pedirValorNoVacio("ingrese su contraseña");

if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
  alert("bienvenido " + usuario);
} else {
  alert("usuario o contraseña incorrecto");
}

let alumno = {
  nombre: "",
  notas: [],
  promedio: 0,

  pedirDatos: function() {
    this.nombre = prompt("Ingresa el nombre del alumno:");
    let cantidadNotas = parseInt(prompt("¿Cuántas notas desea ingresar?"));
    for (let i = 0; i < cantidadNotas; i++) {
      this.notas.push(parseFloat(prompt("Ingrese la nota #" + (i + 1))));
    }
  },
  
  calcularPromedio: function() {
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }
    this.promedio = suma / this.notas.length;
  }
};

alumno.pedirDatos();
alumno.calcularPromedio();

console.log(alumno.nombre);
console.log(alumno.notas);
console.log(alumno.promedio);

function pedirValorNoVacio(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje);
  } while (valor.trim() === "");
  return valor;
}
