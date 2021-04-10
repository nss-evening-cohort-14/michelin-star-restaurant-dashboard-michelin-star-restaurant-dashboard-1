const singleReservation = (item) => {
  document.querySelector('#modal-body').innerHTML = `<div id="view-${item.firebaseKey}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h2 class="modal-header">${item.name} — Table #</h2>
        <p class="modal-header">Party of ${item.party_size}</p>
        <p class="modal-header">${item.day_of_week}, ${item.date} at ${item.time}</p>
      <div id="reservationStaff">
        <h2>Assigned Staff</h2>
          <p>Host: ${item.job_title || 'Not Assigned'}</p>
          <p>Server: ${item.job_title || 'Not Assigned'}</p>
          <p>Busser: ${item.job_title || 'Not Assigned'}</p>
          <p>Bartender: ${item.job_title || 'Not Assigned'}</p>
        </div>
      </div>
      <div class="modal-footer">
        <p>${item.notes}</p>
      </div>
    </div>
  </div>`;
};

export default singleReservation;
