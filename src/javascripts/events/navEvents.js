import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';
import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';

const navEvents = () => {
  // Events for Navbar, READ only

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
  });

  // Click event for Ingredients
  document.querySelector('#nav-ingredients').addEventListener('click', (e) => {
    e.preventDefault();
    getIngredients().then((ingredients) => showIngredients(ingredients));
  });
};

export default navEvents;
