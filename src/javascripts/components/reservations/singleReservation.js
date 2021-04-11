const singleReservation = (reservations, staffArray) => {
  document.querySelector('#modal-body').innerHTML = `<div id="single-reservations">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h2 class="modal-header"> ${reservations.name} — Table #</h2>
        <p class="modal-header">Party of ${reservations.party_size}</p>
        <p class="modal-header">${reservations.day_of_week}, ${reservations.date} at ${reservations.time}</p>
      </div>
      <div id="assigned-staff">
      ${staffArray.map((staff) => `<p>${staff}</p>`)}
      </div>
      <div class="modal-footer">
        <p>${reservations.notes}</p>
      </div>
    </div>
  </div>`;
};

export default singleReservation;
