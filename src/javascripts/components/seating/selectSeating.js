// import { getSeating } from '../../helpers/data/seatingData';
import { getFilteredTables } from '../../helpers/data/seatingReservationsData';

const selectTable = (array = [], value) => {
  let domString = `<label for="table">Select a seating</label>
  <select class="form-control" id="seating-option" required>
  <option value="">Select a Table</option>`;

  getFilteredTables(value).then((seatingArray) => {
    seatingArray.map((seating) => {
      if (array.includes(seating.firebaseKey)) {
        domString += `<option selected value="${seating.firebaseKey}">${seating.table_number} (Table Capacity: ${seating.table_capacity})</option>`;
      } else {
        domString += `<option value="${seating.firebaseKey}">${seating.table_number} (Table Capacity: ${seating.table_capacity})</option>`;
      }
      return domString;
    });
    domString += '</select>';
    document.querySelector('#select-seating').innerHTML = domString;
  });
};

export default selectTable;
