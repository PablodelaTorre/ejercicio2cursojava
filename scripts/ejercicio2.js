let edadmin = parseInt(18);
let edadmax = parseInt(65)
let edad = parseInt(prompt("Ingrese su edad"));
resultado1 = edadmin - edad;

if((edad >= edadmin) && (edad <= edadmax )) {
    alert("Usted puede jugar este juego");

}else if(edad < edadmin) {
    alert("A usted le faltan " + resultado1 + " años para poder jugar este juego.");
}else {
    alert("Usted supera el limite permitido de edad, no puede ingresar al juego.")
}