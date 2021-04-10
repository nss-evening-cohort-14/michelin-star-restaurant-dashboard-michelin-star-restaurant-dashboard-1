// import { getMenuItems } from '../../helpers/data/menuData';
// import menuFilter from './menuFilter';

import { getIngredients } from '../../helpers/data/ingredientsData';

// const selectMenuItem = () => {
//   document.querySelector('#view').innerHTML = '';
//   document.querySelector('#filter-container').innerHTML = '';
//   document.querySelector('#form-container').innerHTML = '';
//   getMenuItems().then((menuArray) => menuFilter(menuArray));
// };

// export default selectMenuItem;

const selectMenuItem = (array = []) => {
  document.querySelector('#update-menuItem').innerHTML = '';
  let domString = `<ul>
    <li class="dropdown">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Ingredients<b class="caret"></b></a>
        <ul class="dropdown-menu" id="ingredients-list">
            <li>
            </li>`;

  getIngredients().then((ingredientsArray) => {
    ingredientsArray.forEach((ingredient) => {
      if (array.includes(ingredient.firebaseKey)) {
        domString += `<li>
      <div class="checkbox">
          <label>
              <input type="checkbox" name="${ingredient.name}" class="ingredient-check" id="ingredientCheckbox${ingredient.name}" value="${ingredient.firebaseKey}" checked> ${ingredient.name}
          </label>
      </div>
  </li>`; console.warn(ingredient.name);
      } else {
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

    document.querySelector('#select-ingredients').innerHTML = domString;
  });
};

export default selectMenuItem;
