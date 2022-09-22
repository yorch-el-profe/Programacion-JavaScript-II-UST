// fetch realiza peticiones y sólo está disponible
// en el navegador
fetch('https://bedu.org')
  // Se recibe una respuesta por parte del servidor
  .then(function (response) {
    console.log(response);

    // Convertimos el body de la respuesta en texto
    return response.text();
  })
  .then(function (html) {
    console.log(html);
  });