const editSeatingForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-form" class="mb-4">
      <div class="form-group" id="select-reservation">
      </div>
      <button type="button" id="update-table&&${pinObject.firebaseKey}" class="btn btn-danger">Update Pin</button>
    </div>`;
    selectReservation(reservationObject);
}
