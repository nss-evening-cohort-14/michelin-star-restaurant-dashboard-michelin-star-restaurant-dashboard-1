import { getMenuItems } from '../helpers/data/menuData';
import { showMenuItems } from '../components/menu/menu';
import { showReservations } from '../components/reservations/reservations';
import { getReservations } from '../helpers/data/reservationData';
import showStaff from '../components/staff/showStaff';
import { getStaff } from '../helpers/data/staffData';
import { getIngredients } from '../helpers/data/ingredientsData';
import { showIngredients } from '../components/ingredients/showIngredients';
import getSeating from '../helpers/data/seatingData';
import showSeating from '../components/seating/seating';

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
