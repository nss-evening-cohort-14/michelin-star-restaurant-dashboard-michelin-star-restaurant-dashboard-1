const menuFilter = (array) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  let domString = `<div class="container">
  <label for="menuItem">Select an Menu</label>
  <select class="form-control" id="menuItem" required>
  <option value="">Select a Menu</option>`;
  array.forEach((item) => {
    domString += `<option value="${item.firebaseKey}" id="${item.firebaseKey}">${item.title}</option>`;
  });
  domString += '</select></div><button type="button" class="btn btn-primary" id="update-menuItem">Update Menu</button>';
  document.querySelector('#view').innerHTML = domString;
};

export default menuFilter;
