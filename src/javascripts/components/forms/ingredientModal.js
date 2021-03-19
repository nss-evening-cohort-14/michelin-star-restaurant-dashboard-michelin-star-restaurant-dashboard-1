const menuIngredients = (array) => {
  document.querySelector('#modal-body').innerHTML = `
<div id="menu-ingredients">
</div>`;
  array.forEach((ingredient) => {
    document.querySelector('#menu-ingredients').innerHTML += `<p>${ingredient.name}</p> </br>`;
  });
};

export default menuIngredients;
