const showReservations = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <ul class="list-group-res" style="list-style-type:none;">
      <li class="list-group-item"><strong>Last Name:</strong> ${item.name}</li>
    </ul>`;
  });
};

const showLoginReservations = (array) => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  document.querySelector('#stage').innerHTML = '<button type="button" class="btn btn-dark mt-2" data-toggle="modal" data-target="#formModal" id="addReservation">Add a New Reservation</button>';
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <div class="card m-3">
      <div class="card-header">
        <a href="#" id="res-link"><h5 id="res-title--${item.firebaseKey}" class="card-title mt-5">${item.name}</h5></a>
      </div>
      <div class="card-body">
        <button class="btn btn-secondary" data-toggle="modal" data-target="#formModal" id="edit-res-btn--${item.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-res--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
};

export { showReservations, showLoginReservations };
