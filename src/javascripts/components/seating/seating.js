const showSeating = (array) => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  document.querySelector('#view').innerHTML = `<div id="seating-list">
  </div>`;
  array.forEach((item) => {
    let status = 'Reserved';
    if (item.status) {
      status = 'Open';
    }
    document.querySelector('#seating-list').innerHTML += `<div class="card" id="seating-card" style="width: 15rem;">
      <div class="card-body">
        <p>Table ${item.table_number} is ${status}. </br>
        Total Seats: ${item.table_capacity}</p>
        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formModal" id="edit-table--${item.firebaseKey}">Assign Table to Reservation</button>
      </div>
    </div>`;
  });
};

export default showSeating;
