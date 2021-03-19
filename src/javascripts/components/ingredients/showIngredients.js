const showIngredients = (array) => {
  document.querySelector('#form-container').innerHTML = '<button type="button" class="btn btn-info mt-2" data-toggle="modal" data-target="#formModal" id="addIngredient">Add a new ingredient</button>';
  document.querySelector('#view').innerHTML = `<div class="card mt-2 ingredients" style="width: 18rem;">
  <ul class="list-group list-group-flush" id="ingredients-list">
  </ul>
</div>`;
  array.forEach((item) => {
    document.querySelector('#ingredients-list').innerHTML += `
    <li class="list-group-item text-capitalize">${item.name}</li>`;
  });
};

const showLoginIngredients = (array) => {
  document.querySelector('#form-container').innerHTML = '<button type="button" class="btn btn-info mt-2" data-toggle="modal" data-target="#formModal" id="addIngredient">Add a new ingredient</button>';
  document.querySelector('#view').innerHTML = `<div class="card mt-2 ingredients" style="width: 18rem;">
  <ul class="list-group list-group-flush" id="ingredients-list">
  </ul>
</div>`;
  array.forEach((item) => {
    document.querySelector('#ingredients-list').innerHTML += `
    <li class="list-group-item text-capitalize">${item.name} </br>
    <button type="button" class="btn btn-danger" id="deleteIngredient^^${item.firebaseKey}">Delete</button></li>`;
  });
};

export { showIngredients, showLoginIngredients };