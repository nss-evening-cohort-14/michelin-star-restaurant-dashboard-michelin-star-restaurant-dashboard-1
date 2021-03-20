import selectIngredients from '../menu/selectIngredient';

const createMenuItemForm = () => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <form id="create-menu-item-form" class="mb-4">
  <div class="form-group">
    <label for="itemImage">Menu Item Image</label>
    <input type="url" class="form-control" id="itemImage" placeholder="Menu Image" required>
  </div>
  <div class="form-group">
    <label for="itemTitle">Menu Item Title</label>
    <input type="text" class="form-control" id="itemTitle" aria-describedby="itemTitle" placeholder="Enter Menu Item Title" required>
  </div>
  <div class="form-group">
    <label for="itemDescription">Menu Item Description</label>
    <input type="text" class="form-control" id="itemDescription" aria-describedby="itemDescription" placeholder="Enter Menu Item Description" required>
  </div>
  <div class="form-group">
    <label for="itemPrice">Menu Item Price</label>
    <input type="text" class="form-control" id="itemPrice" aria-describedby="itemPrice" placeholder="Enter Menu Item Price" required>
  </div>
  <div class="form-group" id="select-ingredients">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="available">
    <label class="form-check-label" for="available">Availabe?</label>
  </div>
  <button type="submit" id="create-menu-item" class="btn btn-primary">Create Menu Item</button>
</form>`;

  selectIngredients();
};

export default createMenuItemForm;
