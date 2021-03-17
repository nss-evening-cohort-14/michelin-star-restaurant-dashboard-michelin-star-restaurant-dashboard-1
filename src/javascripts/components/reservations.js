const showReservations = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '<h3>Reservations</h3>';
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

export default showReservations;
