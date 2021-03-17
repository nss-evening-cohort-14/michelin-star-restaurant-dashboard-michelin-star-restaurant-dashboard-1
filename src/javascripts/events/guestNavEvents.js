import showReservations from '../components/reservations';
import getReservations from '../helpers/data/reservationData';
import getMenuItems from '../menu items/menuData';
import showMenuItems from '../menu items/menu';
import showStaff from '../components/showStaff';
import getStaff from '../helpers/staffData';
import { getIngredients } from '../ingredients/ingredientsData';
import { showIngredients } from '../ingredients/showIngredients';
import getSeating from '../seating/seatingData';
import showSeating from '../seating/seating';

const guestNavEvents = () => {
  // Events for Navbar, READ only

  document.querySelector('#nav-staff').addEventListener('click', () => {
    getStaff().then((staffArray) => showStaff(staffArray));
  });
  // reservations view
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showReservations(reservations));
  });
  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showMenuItems(menuItemsArray));
  });

  // Click event for Ingredients
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

export default guestNavEvents;
