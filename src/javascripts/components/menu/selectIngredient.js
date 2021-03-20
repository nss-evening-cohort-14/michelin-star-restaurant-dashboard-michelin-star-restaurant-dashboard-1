// import firebase from 'firebase/app';
import 'firebase/auth';
import { getIngredients } from '../../helpers/data/ingredientsData';

const selectIngredients = () => {
  let domstring = `<ul>
    <li class="dropdown">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Ingredients<b class="caret"></b></a>
        <ul class="dropdown-menu">
            <li>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Random Ingredient
                    </label>
                </div>
            </li>
        </ul>
    </li>
  </ul>`;

  getIngredients().then((ingredientsArray) => {
    ingredientsArray.foreach((ingredient) => {
      domstring += `<input type="checkbox">${ingredient.title}`;
    });
  });

  domstring += '</select>';

  document.querySelector('#select-ingredients').innerHTML = domstring;
};

export default selectIngredients;
