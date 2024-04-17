
function validarUsuario(){
    // Definir el usuario y contraseña válidos
    const usuarioValido = "tutor";
    const contrasenaValida = "micontraseña";

    //Contador de intentos
    let intentos = 3;

    //Mientras intentos sea mayor que 0
    while (intentos > 0){
        //Solicitar al usuario ingresar usuario y contraseña
        const usuarioIngresado = prompt("Ingresa tu usuario:");
        const contrasenaIngresada = prompt("Ingresa tu contraseña:");

        // Verificar si el usuario y la contraseña ingresados cpinciden con los válidos
        if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida){
            return true; // Usuario y contraseña válidos
        } else{
            intentos--; // Disminuir el contador de intentos
            alert(`Usuario o contraseña incorrectos. Te quedan ${intentos} intentos`);
        }
    }
    return false; // Se agotaron los intentos
}

// Llamar a la función para validar el usuario
if (validarUsuario()){
    console.log("Hola! Que lindo que hayas regresado :D");
}else{
    console.log("Se agotaron los intentos. Tendremos que bloquearte ;(");
}