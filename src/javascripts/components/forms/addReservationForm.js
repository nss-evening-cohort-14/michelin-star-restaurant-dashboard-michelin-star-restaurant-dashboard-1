const addReservationForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form id="add-res-Form" class="mb-4">
  <div class="form-group">
    <label for="Reservation Last Name">Last Name: </label>
    <input type="text" class="form-control" id="last-name" placeholder="Last Name" required>
  </div>
  <div class="form-group">
    <label for="Reservation Party Size">Party Size: </label>
    <input type="text" class="form-control" id="party-size" placeholder="Party Size" required>
  </div>
  <div class="form-group">
    <label for="Reservation Date">Date: </label>
    <input type="date" class="form-control" id="res-date" placeholder="Enter Date" required>
  </div>
  <div class="form-group">
    <label for="Reservation Time">Reservation Time: </label>
    <input type="time" class="form-control" id="res-time" placeholder="Enter Time" required>
  </div>
  <div class="form-group">
    <label for="Reservation Date">Notes: </label>
    <input type="notes" class="form-control" id="res-notes" placeholder="Enter Notes" required>
  </div>
  </div>
  <button type="submit" id="submit-reservation" class="btn btn-primary">Submit Reservation</button>
  </form>`;
};

export default addReservationForm;
