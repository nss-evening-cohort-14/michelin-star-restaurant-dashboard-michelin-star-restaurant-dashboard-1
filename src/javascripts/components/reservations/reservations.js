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
      <li class="list-group-item"><strong>Day of the Week:</strong> ${item.day_of_week}</li>
      <li class="list-group-item"><strong>Reservation Time:</strong> ${item.time}</li>
      <li class="list-group-item"><strong>Notes:</strong> ${item.notes}</li>
    </ul>`;
  });
};

const showLoginReservations = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <ul class="list-group-res">
      <li class="list-group-item"><strong>Last Name:</strong> ${item.name}</li>
      <li class="list-group-item"><strong>Party Size:</strong> ${item.party_size}</li>
      <li class="list-group-item"><strong>Reservation Date:</strong> ${item.date}</li>
      <li class="list-group-item"><strong>Day of the Week:</strong> ${item.day_of_week}</li>
      <li class="list-group-item"><strong>Reservation Time:</strong> ${item.time}</li>
      <li class="list-group-item"><strong>Notes:</strong> ${item.notes}</li>
    </ul>
    <button class="btn btn-danger" id="delete-res--${item.firebaseKey}">Delete Reservation</button>`;
  });
};

export { showReservations, showLoginReservations };
