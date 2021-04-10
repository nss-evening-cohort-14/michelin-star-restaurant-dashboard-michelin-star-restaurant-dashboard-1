import { getReservations } from '../../helpers/data/reservationData';

const selectReservation = (array = []) => {
  $('#filter-container').empty();
  let domString = `<ul>
          <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Reservation<b class="caret"></b></a>
          <ul class="dropdown-menu" id="reservation-list">`;
  getReservations().then((reservationArray) => {
    reservationArray.map((reservation) => {
      if (array.includes(reservation.firebaseKey)) {
        domString += `<li>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="${reservation.name}" class="reservation-check" id="reservationCheckBox${reservation.name}" value="${reservation.firebaseKey}" checked> ${reservation.name}
                        </label>
                      </div>
                    </li>`;
      } else {
        domString += `<li>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="${reservation.name}" class="reservation-check" id="reservationCheckBox${reservation.name}" value="${reservation.firebaseKey}"> ${reservation.name}
                          </label>
                        </div>
                      </li>`;
      }
      return domString;
    });
    $('#reservation-dropdown-container').html(domString);
  });
};

export default selectReservation;
