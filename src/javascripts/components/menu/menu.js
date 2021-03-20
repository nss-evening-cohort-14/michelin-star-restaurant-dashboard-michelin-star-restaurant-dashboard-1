const showMenuItems = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media pb-2">
    <img src="${item.image}" class="mr-3" id="menuItemImage2"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <div class="pb-2">
<<<<<<< HEAD
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">View Ingredients</button>
=======
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">Show Full Ingredient List</button>
>>>>>>> a64b37acc2469616f0644207970dcb9f10ee5932
      </div>
      <p>${item.price}</p>
    </div>
    </div>`;
  });
};

const showLoginMenuItems = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '<button type="button" class="btn btn-light" id="add-menu-btn">Add Menu Item</button>';
  document.querySelector('#modal-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media">
    <img src="${item.image}" class="mr-3" id="menuItemImage"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">Show Full Ingredient List</button>
      <p>${item.price}</p>
      <div class="pb-2">
<<<<<<< HEAD
        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">View Ingredients</button>
=======
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#formModal" id="edit-menu-item--${item.firebaseKey}">Edit</button>
>>>>>>> a64b37acc2469616f0644207970dcb9f10ee5932
        <button type="button" class="btn btn-danger" id="delete-menu-item--${item.firebaseKey}">Delete</button>
      </div>
    </div>
    </div>`;
  });
};

export { showMenuItems, showLoginMenuItems };
