alert("bienvenidos a la calculadora ");
const usuarioAutorizado = prompt("registre su usuario");
const contraseniaAutorizada = prompt("registre su contraseña");

let usuario = prompt("ingrese su usuario");
let contrasenia = prompt("ingrese su contraseña");
if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
  alert ("bienvenido "  +  usuario);
  
  let num1 = parseInt(prompt("ingrese el primer numero:"));
  let operacion = prompt("ingrese la operacion a realizar (+, -, *, /)")
  let num2= parseInt(prompt("ingrese el segundo numero:"));

switch(operacion){
  case "+":
    suma(num1, num2);
    break;
  case "-":
    resta(num1, num2);
    break;
  case "/":
    division(num1, num2);
    break;
  case "*":
    multiplicaion(num1, num2);
    break;
  default:
    alert("ingrese una operacion valida!!")    

}

} else{
  alert("usuario o contraseña incorrecto")
}

//funciones

function suma(numeroA, numeroB){
  return alert(("el resultado es: " + numeroA + numeroB));
}

function resta(numeroA, numeroB){
 return alert(("el resultado es: " + numeroA - numeroB));
}
function division(numeroA, numeroB){
  if (numeroA <= 0){
    alert("esta division no es posible");
  }
  else { 
    alert(("el resultado es: " + numeroA / numeroB));
  }
}
function multiplicaion(numeroA, numeroB){
return alert(("el resultado es: " + numeroA * numeroB));
}
