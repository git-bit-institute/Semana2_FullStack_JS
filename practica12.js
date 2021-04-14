// Suma de dos numeros - TRAUMA
// Pedimos los dos numeros a sumar
let num1 = 2;
let num2 = 2;
sumaDosNumeros(num1,num2);

const sumaDosNumeros = (num1, num2) => {
   // let num1 = prompt("ingrese numero 1");
   // let num2 = prompt("ingrese numero 2");
   console.log(num1, num2);
   let resultado = num1 + num2;
   alert("la suma es " + resultado);
}