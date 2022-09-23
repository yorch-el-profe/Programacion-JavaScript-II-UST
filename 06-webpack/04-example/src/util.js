export function updateSelect(breeds) {
  const select = document.getElementById('breeds');

  for (const breed of breeds) {
    const option = document.createElement('option');
    option.innerText = breed;
    option.value = breed;
    select.append(option);
  }
}

export function updateImg(url) {
  const container = document.getElementById('img-container');
  container.innerHTML = `<img src="${url}" class="img-fluid"/>`;
}