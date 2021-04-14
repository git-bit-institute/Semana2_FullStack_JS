// Suma de dos numeros
const sumaDosNumeros = () => {
    let num1 = prompt("ingrese numero 1");
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt(num1) + parseInt(num2);
    alert("la suma es " + resultado);
 }
 // Restar dos numero
 const restaDosNumeros = () => {
    let num1 = prompt("ingrese numero 1");
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt(num1) - parseInt(num2);
    alert("la resta es " + resultado);
 }
  // Multiplicar dos numero
  const multiplicarDosNumeros = () => {
    let num1 = prompt("ingrese numero 1");
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt(num1) * parseInt(num2);
    alert("la multiplicación es " + resultado);
 }
  // Dividir dos numero
  const dividirDosNumeros = () => {
    let num1 = prompt("ingrese numero 1");
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    // Validacion por 0
    if (num2 != 0) {
        let resultado = parseFloat(num1) / parseFloat(num2);
        alert("la División es " + resultado);
    } else {
        alert("No es posible dividir por cero");
    }
 }