import { getSingleIngredient } from './ingredientsData';
import { getSingleMenuItemIngredients } from './menuData';

const getMenuIngredients = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMenuItemIngredients(firebaseKey).then((ingredientsArray) => {
    const ingredientList = ingredientsArray.map((ingredient) => getSingleIngredient(ingredient));

    Promise.all(ingredientList).then((response) => resolve(response));
  }).catch((error) => reject(error));
});

export default getMenuIngredients;
