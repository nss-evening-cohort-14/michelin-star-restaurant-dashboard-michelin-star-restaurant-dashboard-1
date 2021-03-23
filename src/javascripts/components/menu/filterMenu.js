import { getIngredients } from '../../helpers/data/ingredientsData';

const filterMenu = (array = []) => {
  let domString = `<ul>
    <li class="dropdown">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Ingredients<b class="caret"></b></a>
        <ul class="dropdown-menu" id="filter-ingredients">
            <li>
            </li>`;

  getIngredients().then((ingredientsArray) => {
    ingredientsArray.forEach((ingredient) => {
      if (array.includes(ingredient.firebaseKey)) {
        domString += `<li>
        <div class="checkbox">
            <label>
                <input type="checkbox" name="${ingredient.name}" class="ingredient-check" id="ingredientCheckbox${ingredient.name}" value="${ingredient.firebaseKey}"> ${ingredient.name}
            </label>
        </div>
    </li>`;
      }
    });

    domString += '</ul> </li> </ul>';

    document.querySelector('#form-container').innerHTML = domString;
  });
};

export default filterMenu;
