// Condicionales
// pedir nombre de persona
let nombre=prompt("Ingresa tu nombre");
let edad=prompt("Ingresa tu edad");
// Condicional para saber la edad y mostrar un mensaje
// que pasa si no ponen la edad (programación defensiva - Validaciones)
if (edad >= 18) {
    alert("Bienvenidos a la pagina de peliculas violentas");
} else {
    alert("Debes ser mayor de edad para ver nuestras peliculas");
}