const showSeating = (array) => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = '';
  document.querySelector('#view').innerHTML = `<div id="seating-list">
  </div>`;
  array.forEach((item) => {
    let available = 'Available';
    if (item.available === false) {
      available = 'Reserved';
    }
    document.querySelector('#seating-list').innerHTML += `<div class="card" id="seating-card" style="width: 15rem;">
      <div class="card-body">
        <p>Table ${item.table_number} is ${available}.</p>
        <p>Total Seats: ${item.table_capacity}</p>
      </div>
    </div>`;
  });
};

export default showSeating;
