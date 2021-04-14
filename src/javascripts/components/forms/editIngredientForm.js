const editIngredientForm = (ingredient) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-Ingredient-Form" class="mb-4">
<div class="form-group">
  <label for="ingredientName">Ingredient: </label>
  <input type="text" class="form-control" id="newIngredientName" value="${ingredient.name}" required>
</div>
<div class="form-group">
  <label for="ingredientQuantity">Inventory Count: </label>
  <input type="text" class="ingredientQuantity" id="ingredientCount" value="${ingredient.quantity}">
</div>
<button type="submit" id="submitEditIngredient--${ingredient.firebaseKey}" class="btn btn-primary">Submit Ingredient</button>
</form>`;
};

export default editIngredientForm;
