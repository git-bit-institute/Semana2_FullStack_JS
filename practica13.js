// Suma de dos numeros

const sumaDosNumeros = () => {
   let num1 = prompt("ingrese numero 1");
   let num2 = prompt("ingrese numero 2");
   console.log(num1, num2);
   let resultado = parseInt(num1) + parseInt(num2);
   alert("la suma es " + resultado);
}