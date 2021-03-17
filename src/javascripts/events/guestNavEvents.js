import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';

const guestNavEvents = () => {
  // Events for Navbar, READ only

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
  });
};

export default guestNavEvents;
