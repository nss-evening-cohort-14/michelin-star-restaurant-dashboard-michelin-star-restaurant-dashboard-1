import { getReservations } from '../../helpers/data/reservationData';
// import { getSeating } from '../../helpers/data/seatingData';

const selectReservationTable = (array = []) => {
  let domString = `<label for="table">Select a Reservation</label>
  <select class="form-control" id="reservation-option" required>
  <option value="">Select a Reservation</option>`;

  // const filterResBySize = (item) => {
  //   const singleTable = getSeating().then((response) => response.map((table) => table.table_capacity));
  //   if (item.party_size <= singleTable) {
  //     return true;
  //   }
  // };
  // const tableEval = reservation.filter(filterResBySize);
  // let capacity = [];
  // getSeating().then((response) => {
  //   response.forEach((item) => {
  //     capacity = item.table_capacity;
  //     console.warn(capacity);
  //   });
  // });

  // const filterResBySize = (item) => {
  //   const singleTable = getSeating().then((response) => response.forEach((table) => table.table_capacity));
  //   if (item.party_size <= singleTable) {
  //     return true;
  //   }
  // };
  // const tableEval = reservationsArray.filter(filterResBySize);

  getReservations().then((reservationsArray) => {
    reservationsArray.map((reservation) => {
      if (array.includes(reservation.firebaseKey)) {
        domString += `<option selected value="${reservation.firebaseKey}">${reservation.name} (Party Size: ${reservation.party_size})</option>`;
      } else {
        domString += `<option value="${reservation.firebaseKey}">${reservation.name} (Party Size: ${reservation.party_size})</option>`;
      }
      return domString;
    });
    domString += '</select>';
    document.querySelector('#select-reservation').innerHTML = domString;
  });
};

export default selectReservationTable;
