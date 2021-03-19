const addIngredientForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form id="add-Ingredient-Form" class="mb-4">
<div class="form-group">
  <label for="ingredientName">Ingredient: </label>
  <input type="text" class="form-control" id="ingredientName" placeholder="Ingredient Name" required>
</div>
<button type="submit" id="submit-ingredient" class="btn btn-primary">Submit Ingredient</button>
</form>`;
};

export default addIngredientForm;
