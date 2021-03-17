<<<<<<< HEAD
import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';

const guestNavEvents = () => {
  // Events for Navbar, READ only

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
=======
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
>>>>>>> development
  });
};

export default guestNavEvents;
