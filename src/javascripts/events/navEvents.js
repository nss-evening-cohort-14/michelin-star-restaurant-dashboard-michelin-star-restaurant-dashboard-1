import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';
import getMenuItems from '../menu items/menuData';
import { showUserMenuItems } from '../menu items/menu';
import getSeating from '../seating/seatingData';
import showSeating from '../seating/seating';
import showStaff from '../staff/showStaff';
import getStaff from '../staff/staffData';
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
    getMenuItems().then((menuItemsArray) => showUserMenuItems(menuItemsArray));
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
  // Click event for Seating
  document.querySelector('#nav-seating').addEventListener('click', (e) => {
    e.preventDefault();
    getSeating().then((seats) => showSeating(seats));
  });
};

export default navEvents;
