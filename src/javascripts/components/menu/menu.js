import filterMenu from './filterMenu';

const showMenuItems = (array) => {
  filterMenu();
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media pb-2">
    <img src="${item.image}" class="mr-3" id="menuItemImage2"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <div class="pb-2">
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">Show Full Ingredient List</button>
      </div>
      <p>${item.price}</p>
    </div>
    </div>`;
  });
};

const showLoginMenuItems = (array) => {
  filterMenu();
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '<button type="button" class="btn btn-light" id="add-menu-btn">Add Menu Item</button>';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media">
    <img src="${item.image}" class="mr-3" id="menuItemImage"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">Show Full Ingredient List</button>
      <p>${item.price}</p>
      <div class="pb-2">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#formModal" id="edit-menu-item--${item.firebaseKey}">Edit</button>
        <button type="button" class="btn btn-danger" id="delete-menu-item--${item.firebaseKey}">Delete</button>
      </div>
    </div>
    </div>`;
  });
};

export { showMenuItems, showLoginMenuItems };
