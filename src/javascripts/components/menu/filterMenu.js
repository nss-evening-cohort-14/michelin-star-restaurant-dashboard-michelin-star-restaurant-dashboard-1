import { getIngredients } from '../../helpers/data/ingredientsData';

const filterMenu = () => {
  let domString = `<ul>
    <li class="dropdown">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Filter by Ingredients<b class="caret"></b></a>
        <ul class="dropdown-menu" id="ingredients-list">
        <div>
        <input type="submit" name="submit" value="Submit" id="filterMenuSubmit" />
        </div> 
            <li>
            </li>`;

  getIngredients().then((ingredientsArray) => {
    ingredientsArray.forEach((ingredient) => {
      domString += `<li>
      <div class="checkbox">
          <label>
              <input type="checkbox" name="${ingredient.name}" class="ingredient-check" id="filterIngredientCheckbox${ingredient.name}" value="${ingredient.firebaseKey}"> ${ingredient.name}
          </label>
      </div>
  </li>`;
    });
    domString += '</ul> </li> </ul>';
    document.querySelector('#filter-container').innerHTML = domString;
  });
};

export default filterMenu;
