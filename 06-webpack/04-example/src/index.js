import { updateSelect, updateImg } from './util';
import './index.css';
import names from './names.txt';

console.log(names);

fetch('https://bedu-dogs-api.herokuapp.com/breeds')
  .then(function (response) {
    return response.json();
  })
  .then(function ({ data }) {
    updateSelect(data);
  });

const button = document.getElementById('get-image');

button.addEventListener('click', function () {
  const select = document.getElementById('breeds');

  fetch(`https://bedu-dogs-api.herokuapp.com/breeds/${select.value}/images`)
    .then(function (response) {
      return response.json();
    })
    .then(function ({data}) {
      updateImg(data);
    });
});

