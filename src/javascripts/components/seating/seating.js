const showSeating = (array) => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = `<div class="card mt-2" style="width: 18rem;">
  <ul class="list-group list-group-flush" id="ingredients-list">
  </ul>
</div>`;
  array.forEach((item) => {
    let status = 'Reserved';
    if (item.status) {
      status = 'Open';
    }
    document.querySelector('#ingredients-list').innerHTML += `
    <li class="list-group-item">Table ${item.table_number} is ${status}. </br>
    Total Seats: ${item.table_capacity}</li>`;
  });
};

export default showSeating;
