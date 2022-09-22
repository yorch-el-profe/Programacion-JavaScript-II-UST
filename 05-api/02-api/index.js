fetch('https://bedu-dogs-api.herokuapp.com/breeds')
  .then(function (response) {
    return response.json();
  })
  .then(function ({ data }) {
    updateSelect(data);
  });

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