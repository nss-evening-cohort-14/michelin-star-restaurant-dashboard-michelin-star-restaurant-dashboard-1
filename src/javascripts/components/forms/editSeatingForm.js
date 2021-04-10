import selectReservationTable from '../seating/selectSeating';

const editSeatingForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-form" class="mb-4">
      <div class="form-group" id="select-reservation">
      </div>
      <button type="button" id="update-table--${pinObject.firebaseKey}" class="btn btn-danger">Assign Reservation</button>
    </div>`;
  selectReservationTable();
};

export default editSeatingForm;
