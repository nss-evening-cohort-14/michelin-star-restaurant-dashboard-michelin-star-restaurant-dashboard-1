import { getSingleMenuReservationInfo } from '../../helpers/data/menuReservationData';
import { getSingleSeatingReservationInfo } from '../../helpers/data/seatingReservationsData';
import selectMenuItem from '../menu/selectMenuItem';
import selectTable from '../seating/selectSeating';

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
      <div class="form-group" id="select-seating">
      </div>
      <div class="form-group" id="update-menuItem-container">
      </div>
      <button type="submit" id="update-res--${resObject.firebaseKey}" class="btn btn-success">Update Reservation</button>
    </form>`;
  getSingleMenuReservationInfo(resObject.firebaseKey).then((response) => {
    const reservationArray = Object.values(response).map((element) => element.menu_item_id);
    selectMenuItem(reservationArray);
  });
  const partySize = resObject.party_size;
  getSingleSeatingReservationInfo(resObject.firebaseKey).then((response) => {
    const reservationArray = Object.values(response).map((element) => element.table_id);
    selectTable(reservationArray, partySize);
  });
};

export default editReservationForm;
