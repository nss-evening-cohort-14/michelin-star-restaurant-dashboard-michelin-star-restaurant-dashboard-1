const editReservationForm = (resObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="Reservation Last Name">Last Name: </label>
        <input type="text" class="form-control" id="last-name" placeholder="Last Name" value="${resObject.name}">
      </div>
      <div class="form-group">
        <label for="Reservation Party Size">Party Size: </label>
        <input type="text" class="form-control" id="party-size" placeholder="Party Size" value="${resObject.party_size}">
      </div>
      <div class="form-group">
        <label for="Reservation Date">Date: </label>
        <input type="date" class="form-control" id="res-date" placeholder="Enter Date" value="${resObject.date}">
      </div>
      <div div class="form-group">
        <label for="Reservation Time">Reservation Time: </label>
        <input type="time" class="form-control" id="res-time" placeholder="Enter Time" value="${resObject.time}">
      </div>
      <div class="form-group">
        <label for="Reservation Date">Notes: </label>
        <input type="notes" class="form-control" id="res-notes" placeholder="Enter Notes" value="${resObject.notes}">
      </div>
      <button type="submit" id="update-res--${resObject.firebaseKey}" class="btn btn-success">Update Reservation</button>
    </form>`;
};

export default editReservationForm;
