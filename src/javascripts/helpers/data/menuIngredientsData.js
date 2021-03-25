import { getSingleIngredient } from './ingredientsData';
import { getMenuItems, getSingleMenuItemIngredients } from './menuData';

const getMenuIngredients = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMenuItemIngredients(firebaseKey).then((ingredientsArray) => {
    const ingredientList = ingredientsArray.map((ingredient) => getSingleIngredient(ingredient));

    Promise.all(ingredientList).then((response) => resolve(response));
  }).catch((error) => reject(error));
});

const getFilterMenuItems = (ingredientArray) => new Promise((resolve, reject) => {
  getMenuItems().then((menuArray) => {
    const result = menuArray.filter((item) => ingredientArray.every((ingredient) => item.ingredients.includes(ingredient)));
    resolve(result);
  }).catch((error) => reject(error));
});

export { getMenuIngredients, getFilterMenuItems };
