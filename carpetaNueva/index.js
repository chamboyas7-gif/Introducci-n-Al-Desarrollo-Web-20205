function guardar_localStorage(nombre_usuario, edad_usuario, dia_favorito) {
  const datos = {
    nombre: nombre_usuario || "",
    edad: edad_usuario || "",
    dia: dia_favorito || ""
  };
  localStorage.setItem('datos_usuario', JSON.stringify(datos));
  mostrar_mensaje();
}

function obtener_datos() {
  const datos_guardados = localStorage.getItem('datos_usuario');
  if(datos_guardados) {
    return JSON.parse(datos_guardados);
  }
  else {
    return null;
  }
}

function mostrar_mensaje() {
  const datos = obtener_datos();
  const mensaje = document.getElementById('mensaje');

  if (datos) {
    mensaje.textContent = `Hola ${datos.nombre}, tienes ${datos.edad} años y tu día favorito es: ${datos.dia}.`;
  } else {
    mensaje.textContent = "";
  }
}
window.onload = mostrar_mensaje;