import { getMenuIngredients } from '../../helpers/data/menuIngredientsData';
import selectIngredients from '../menu/selectIngredient';

const editMenuItemForm = (menuObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-menu-form" class="mb-4">
  <div class="form-group">
    <label for="itemImage">Menu Item Image</label>
    <input type="url" class="form-control" id="itemImage" placeholder="Update Image" value="${menuObject.image}" required>
  </div>
  <div class="form-group">
    <label for="itemTitle">Menu Item Title</label>
    <input type="text" class="form-control" id="itemTitle" aria-describedby="itemTitle" placeholder="Update Title" value="${menuObject.title}" required>
  </div>
  <div class="form-group">
    <label for="itemDescription">Menu Item Description</label>
    <input type="text" class="form-control" id="itemDescription" aria-describedby="itemDescription" placeholder="Update Description" value="${menuObject.description}" required>
  </div>
  <div class="form-group">
    <label for="itemPrice">Menu Item Price</label>
    <input type="text" class="form-control" id="itemPrice" aria-describedby="itemPrice" placeholder="Update Price" value="${menuObject.price}" required>
  </div>
  <div class="mb-3" id="menun-dropdown-container"></div>
  <button type="submit" data-toggle="modal" data-target="#formModal" id="update-menu-item--${menuObject.firebaseKey}" class="btn btn-primary">Update Menu Item</button>
</form>`;

  getMenuIngredients(menuObject.firebaseKey).then((response) => selectIngredients(response.map((ingredientObject) => ingredientObject.firebaseKey)));
};

export default editMenuItemForm;
