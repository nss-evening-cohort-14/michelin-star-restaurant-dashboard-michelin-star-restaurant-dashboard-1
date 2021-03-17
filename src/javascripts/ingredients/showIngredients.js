const showIngredients = (array) => {
  document.querySelector('#view').innerHTML = `<div class="card mt-2" style="width: 18rem;">
  <ul class="list-group list-group-flush" id="ingredients-list">
  </ul>
</div>`;
  array.forEach((item) => {
    document.querySelector('#ingredients-list').innerHTML += `
    <li class="list-group-item text-capitalize">${item.name}</li>`;
  });
};

export default showIngredients;
