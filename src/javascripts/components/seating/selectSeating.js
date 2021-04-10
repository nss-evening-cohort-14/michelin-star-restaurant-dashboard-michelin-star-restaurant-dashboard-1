import { getReservations } from '../../helpers/data/reservationData';

const selectReservationTable = (seatingObject = []) => {
  let domString = `<label for="table">Select a Reservation</label>
  <select class="form-control" id="reservation-option" required>
  <option value="">Select a Reservation</option>`;

  getReservations().then((reservationsArray) => {
    reservationsArray.forEach((reservation) => {
      if (reservation.firebaseKey === seatingObject.firebaseKey) {
        domString += `<option selected value="${reservation.firebaseKey}">${reservation.name}</option>`;
      } else {
        domString += `<option value="${reservation.firebaseKey}">${reservation.name}</option>`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-reservation').innerHTML = domString;
  });
};

export default selectReservationTable;
