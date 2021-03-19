const showMenuItems = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media">
    <img src="${item.image}" class="mr-3" id="menuItemImage2"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <p>${item.price}</p>
      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebasekey}">View Ingredients</button>
    </div>
    </div>`;
  });
};

const showLoginMenuItems = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media">
    <img src="${item.image}" class="mr-3" id="menuItemImage"alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <p>${item.price}</p>
      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#formModal" id="view-menu-ingredients--${item.firebasekey}">View Ingredients</button>
      <button type="button" class="btn btn-danger" id="delete-menu-item--${item.firebasekey}">Delete</button>
    </div>
    </div>`;
  });
};

export { showMenuItems, showLoginMenuItems };
