const showReservations = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <ul class="list-group-res">
      <li class="list-group-item"><strong>Last Name:</strong> ${item.name}</li>
      <li class="list-group-item"><strong>Party Size:</strong> ${item.party_size}</li>
      <li class="list-group-item"><strong>Reservation Date:</strong> ${item.date}</li>
      <li class="list-group-item"><strong>Reservation Time:</strong> ${item.time}</li>
      <li class="list-group-item"><strong>Notes:</strong> ${item.notes}</li>
    </ul>`;
  });
};

const showLoginReservations = (array) => {
  document.querySelector('#form-container').innerHTML = '<button type="button" class="btn btn-info mt-2" data-toggle="modal" data-target="#formModal" id="addReservation">Add a New Reservation</button>';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <ul class="list-group-res">
      <li class="list-group-item"><strong>Last Name:</strong> ${item.name}</li>
      <li class="list-group-item"><strong>Party Size:</strong> ${item.party_size}</li>
      <li class="list-group-item"><strong>Reservation Date:</strong> ${item.date}</li>
      <li class="list-group-item"><strong>Reservation Time:</strong> ${item.time}</li>
      <li class="list-group-item"><strong>Notes:</strong> ${item.notes}</li>
      <li class="list-group-item"><button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-res-btn--${item.firebaseKey}">Edit Reservation</button>
      <button class="btn btn-danger" id="delete-res--${item.firebaseKey}">Delete Reservation</button></li>
    </ul>`;
  });
};

export { showReservations, showLoginReservations };
