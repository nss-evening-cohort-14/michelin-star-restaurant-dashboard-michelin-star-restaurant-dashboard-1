import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';
import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';
import showStaff from '../components/showStaff';
import getStaff from '../helpers/staffData';
import getReservations from '../helpers/data/reservationData';
import showReservations from '../components/reservations';

// Events for Navbar, READ only
const navEvents = (user) => {
  // staff view
  document.querySelector('#nav-staff').addEventListener('click', () => {
    getStaff().then((staffArray) => showStaff(staffArray, user));
  });

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
  });
  // reservations view
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showReservations(reservations));
  });

  // ingredient view
  document.querySelector('#nav-ingredients').addEventListener('click', (e) => {
    e.preventDefault();
    getIngredients().then((ingredients) => showIngredients(ingredients));
  });
};

export default navEvents;
