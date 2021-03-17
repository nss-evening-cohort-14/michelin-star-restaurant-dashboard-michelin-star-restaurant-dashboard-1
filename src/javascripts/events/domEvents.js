import { deleteIngredients } from '../ingredients/ingredientsData';
import { showUserIngredients } from '../ingredients/showIngredients';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // Click Events for Ingredients
    if (e.target.id.includes('deleteIngredient')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this ingredient?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        deleteIngredients(firebaseKey).then((ingredients) => showUserIngredients(ingredients));
      }
    }
  });
};

export default domEvents;
