const singleReservation = (reservations) => {
  document.querySelector('#modal-body').innerHTML = `<div id="single-reservations">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h2 class="modal-header"> ${reservations.name} — Table #</h2>
        <p class="modal-header">Party of ${reservations.party_size}</p>
        <p class="modal-header">${reservations.day_of_week}, ${reservations.date} at ${reservations.time}</p>
      </div>
      <div id="assigned-staff"></div>
      <div class="modal-footer">
        <p>${reservations.notes}</p>
      </div>
    </div>
  </div>`;
};

const printAssignedStaff = (array) => {
  document.querySelector('#assigned-staff').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#assigned-staff').innerHTML += `
  <ul class="list-group-res" style="list-style-type:none;">
    <li class="list-group-item">${item.first_name} ${item.last_name}</li>
  </ul>`;
  });
};

export { singleReservation, printAssignedStaff };
