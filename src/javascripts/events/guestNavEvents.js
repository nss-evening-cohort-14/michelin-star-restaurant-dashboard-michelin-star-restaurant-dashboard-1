import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';

const guestNavEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Events for Navbar, READ only

    // Click event for Ingredients
    if (e.target.id.includes('nav-ingredients')) {
      e.preventDefault();
      getIngredients().then((ingredients) => showIngredients(ingredients));
    }
  });
};

export default guestNavEvents;
