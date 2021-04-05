const menuIngredients = (array) => {
  document.querySelector('#modal-body').innerHTML = `
<div class="text-capitalize" id="menu-ingredients">
</div>`;
  array.forEach((ingredient) => {
    console.warn(ingredient);
    document.querySelector('#menu-ingredients').innerHTML += `<p>${ingredient.name}</p> </br>`;
  });
};

export default menuIngredients;
