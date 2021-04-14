import { getSingleSeatingReservationInfo } from '../../helpers/data/seatingReservationsData';
import selectReservationTable from '../seating/selectSeating';

const editSeatingForm = (tableObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <h6>Table Capacity: ${tableObject.table_capacity}</h6>
  <p></p>
  <form id="edit-form" class="mb-4">
      <div class="form-group" id="select-reservation">
      </div>
      <button type="button" id="update-table--${tableObject.firebaseKey}" class="btn btn-danger">Assign Reservation</button>`;
  getSingleSeatingReservationInfo(tableObject.firebaseKey).then((response) => {
    const reservationArray = Object.values(response).map((element) => element.reservation_id);
    selectReservationTable(reservationArray);
  });
};

export default editSeatingForm;
