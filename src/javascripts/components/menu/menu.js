import filterMenu from './filterMenu';

const showMenuItems = (array) => {
  filterMenu();
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="card pb-2">
    <img src="${item.image}" class="mr-3" id="menuItemImage2"alt="...">
    <div class="media-body">
      <h5 class="mt-2">${item.title}</h5>
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
  document.querySelector('#stage').innerHTML = '<button type="button" class="btn btn-dark" id="add-menu-btn">Add Menu Item</button>';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="card m-3" style="width: 20rem; height: 40rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.image}" id="staff-btn--${item.firebaseKey}">
    <div class="card-body">
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.description}</p>
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebaseKey}">Full Ingredient List</button>
      <div class="menu-buttons">
        <button class="btn btn-secondary" type="button" data-toggle="modal" data-target="#formModal" id="edit-menu-item--${item.firebaseKey}">Update</button>
        <button class="btn btn-danger" type="button" id="delete-menu-item--${item.firebaseKey}">Delete</button>
      </div>
    </div>
  </div>`;
  });
};

export { showMenuItems, showLoginMenuItems };
