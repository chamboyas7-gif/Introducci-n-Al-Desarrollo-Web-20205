SessionStorage

¿Qué es?

Es una propiedad del objeto "window" en JavaScript que proporciona un espacio de almacenamiento temporal en el navegador para almacenar datos en pares clave-valor. Estos datos solo duran mientras la pestaña o ventana del navegador esté abierta.

¿Cuáles son sus propiedades?

- Permite almacenar datos como pares clave-valor.

- Los datos persisten durante la sesión de navegación, es decir, mientras la pestaña o ventana esté abierta.

- Incluye métodos como setItem(key, value), getItem(key), removeItem(key), y clear().

- Tiene una propiedad length que indica cuántos ítems están almacenados.

¿Cuál es su estructura?

Es un objeto del tipo Storage que funciona como un mapa o diccionario donde cada entrada tiene una clave única y un valor asociado. Se accede mediante métodos y puede indicarse con sessionStorage['clave'] o sessionStorage.getItem('clave').

¿Cuáles son los requerimientos para usarlo?

Los requisitos para usar SessionStorage sob los siguientes:

- Un navegador moderno que soporte la API Web Storage.

- JavaScript habilitado en el navegador.

- El contexto debe ser una página web cargada sobre HTTP(S).

¿Cuáles son las diferencias que existen respecto de localStorage?

- SessionStorage elimina datos al cerrar la pestaña/ventana; localStorage conserva datos indefinidamente, incluso tras cerrar y reabrir el navegador.

- SessionStorage está limitado a la pestaña/ventana; localStorage es compartido entre pestañas del mismo origen.

- Al abrir una nueva pestaña inicia una nueva sesión en sessionStorage; localStorage es común para todas.

- LocalStorage no expira a menos que el usuario borre datos del navegador, sessionStorage sí al cerrar la sesión.








