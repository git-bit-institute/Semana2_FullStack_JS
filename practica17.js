// Funcion que ejecuta la Mini calculadora
const miniCalculadora = () => {
  // creamos la variable "op" que almacena la operacion a realizar
  let op = prompt(
    "Seleccione el numero indicado para realizar la operación: \n 1 - para sumar \n 2 - para restar \n 3 - para multiplicar \n 4 - para dividir "
  );
  // validamos la opcion seleccionada por el usuario
  if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Deber ser una opcion entre 1 y 4");
  } else {
    // solicitamos los dos numeros para la operacion a realizar
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let resultado = 0;
    // Validar datos correctos en varaibles num1 y num2 (expresiones regulares)
    // Validamos que la operacion sea suma "1"
    switch (op) {
      case "1":
        resultado = num1 + num2;
        break;
      case "2":
        resultado = num1 - num2;
        break;
      case "3":
        resultado = num1 * num2;
        break;
      case "4":
        if (num2 === 0) {
          alert("no es posible dividir por cero");
        } else {
          resultado = num1 / num2;
        }
        break;
    }
    alert("El resultado es " + resultado);
  }
};
