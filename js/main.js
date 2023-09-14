const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
  };
  
 /* Esta función es para simular el backoffice */ 
  const obtenerDetalleDeRegistro = (surName, name, email, message) => {
    return (
      obtenerNombreCompleto(surName, name) +
      ", con correo electónico: " +
      email +
      ". Dejó el siguiente mensaje: " +
      message
    );
  };
  
  let respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); 
  while (respuestaUsuario.trim().toUpperCase() === "SI") {
    let apellidos = prompt("Cuál es tú apellido"); 
    let nombres = prompt("Cuál es tú nombre"); 
    let correo = prompt("Cuál es tú correo electrónico");
    let mensaje = prompt("Cuál es tú mensaje");
  
    // Este sería el comprobante de que la solicitud fue enviada
    alert("¡Tu consulta fue enviada exitosamente!");
    console.log(
      "El usuario " +
        obtenerDetalleDeRegistro(apellidos, nombres, correo, mensaje)
    );
  
    // En caso de que la persona usuaria quisiera enviar otro mensaje se hará la consulta
    respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); 
  }
  
  alert("¿Gracias por usar nuestro simulador de formulario de contacto!");