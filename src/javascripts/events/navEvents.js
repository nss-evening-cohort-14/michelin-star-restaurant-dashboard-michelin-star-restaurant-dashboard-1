import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';

const navEvents = () => {
<<<<<<< HEAD
  // Events for Navbar, READ only

=======
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Events for Navbar, READ only

    // Click event for Ingredients
    if (e.target.id.includes('nav-ingredients')) {
      e.preventDefault();
      getIngredients().then((ingredients) => showIngredients(ingredients));
    }
  });
>>>>>>> development
};

export default navEvents;
