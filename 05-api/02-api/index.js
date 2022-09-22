// Consultamos la lista de todas las razas
fetch('https://bedu-dogs-api.herokuapp.com/breeds')
  .then(function (response) {
    return response.json();
  })
  .then(function ({ data }) {
    // Actualizamos el <select> con las razas
    updateSelect(data);
  });

// Renderiza una lista de razas dentro del <select>
function updateSelect(breeds) {
  const select = document.getElementById('breeds');

  for (const breed of breeds) {
    // <option>
    const option = document.createElement('option');

    // <option>La raza</option>
    option.innerText = breed;

    // <option value="La raza">La raza</option>
    option.value = breed;

    select.append(option);
  }
}

const button = document.getElementById('get-image');

// Escuchando un evento para descargar una imagen
button.addEventListener('click', function () {
  // Obtengo la raza seleccionada
  const select = document.getElementById('breeds');

  // Consulto la imagen aleatoria de la raza seleccionada
  fetch(`https://bedu-dogs-api.herokuapp.com/breeds/${select.value}/images`)
    .then(function (response) {
      return response.json();
    })
    .then(function ({data}) {
      // Actualizar la imagen en el HTML
      updateImg(data);
    });
});

// Toma una url e inserta una etiqueta <img> en el HTML
function updateImg(url) {
  const container = document.getElementById('img-container');
  container.innerHTML = `<img src="${url}" class="img-fluid"/>`;
}