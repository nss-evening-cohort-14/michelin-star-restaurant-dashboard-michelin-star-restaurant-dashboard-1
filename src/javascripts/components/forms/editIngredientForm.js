const editIngredientForm = (firebaseKey) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-Ingredient-Form" class="mb-4">
<div class="form-group">
  <label for="ingredientName">Ingredient: </label>
  <input type="text" class="form-control" id="newIngredientName" placeholder="Ingredient Name" required>
</div>
<button type="submit" id="submitEditIngredient^^${firebaseKey}" class="btn btn-primary">Submit Ingredient</button>
</form>`;
};

export default editIngredientForm;
