const showIngredients = (array) => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  document.querySelector('#view').innerHTML = `<div class="d-flex flex-wrap justify-content-around align-items-center ingredients" id="ingredients-list">
  </div>`;
  array.forEach((item) => {
    document.querySelector('#ingredients-list').innerHTML += `<div class="card m-3" style="width: 20rem;">
    <div class="card-body">
    <h3 class="card-title text-capitalize">${item.name}</h3>
    </br>
      <p class="showIngredientsQty">Quantity: ${item.quantity}</p>
  </div>`;
  });
};

const showLoginIngredients = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  document.querySelector('#stage').innerHTML = '<button type="button" class="btn btn-dark mt-2" data-toggle="modal" data-target="#formModal" id="addIngredient">Add a new ingredient</button>';
  document.querySelector('#view').innerHTML = `<div class="d-flex flex-wrap justify-content-around align-items-center ingredients" id="ingredients-list">
  </div>`;
  array.forEach((item) => {
    document.querySelector('#ingredients-list').innerHTML += `<div class="card m-3" style="width: 20rem;">
    <div class="card-body">
    <h3 class="card-title text-capitalize">${item.name}</h3>
    </br>
      <p class="showIngredientsQty">Quantity: ${item.quantity}</p>
    <div class="card-body">
      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#formModal" id="editIngredient--${item.firebaseKey}">Edit</button>
      <button type="button" class="btn btn-danger" id="deleteIngredient--${item.firebaseKey}">Delete</button></li>
    </div>
  </div>`;
  });
};

export { showIngredients, showLoginIngredients };
