import { getIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { getMenuItems } from '../helpers/data/menuData';
import { showLoginMenuItems } from '../components/menu/menu';
import { getSeating } from '../helpers/data/seatingData';
import showSeating from '../components/seating/seating';
import showStaff from '../components/staff/showStaff';
import { getStaff } from '../helpers/data/staffData';
import { getReservations } from '../helpers/data/reservationData';
import { showLoginReservations } from '../components/reservations/reservations';
import landingPage from '../views/landingPage';
import { getFilteredTables } from '../helpers/data/seatingReservationsData';

// Events for Navbar, READ only
const navEvents = (user) => {
  // staff view
  document.querySelector('#nav-staff').addEventListener('click', () => {
    getStaff().then((staffArray) => showStaff(staffArray, user));
  });

  // menu view
  document.querySelector('#nav-menu').addEventListener('click', () => {
    getMenuItems().then((menuItemsArray) => showLoginMenuItems(menuItemsArray));
  });
  // reservations view
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showLoginReservations(reservations));
  });

  // ingredient view
  document.querySelector('#nav-ingredients').addEventListener('click', (e) => {
    e.preventDefault();
    getIngredients().then((ingredients) => showLoginIngredients(ingredients));
  });
  // Click event for Seating
  document.querySelector('#nav-seating').addEventListener('click', (e) => {
    e.preventDefault();
    getSeating().then((seats) => showSeating(seats));
    getFilteredTables(4).then((response) => console.warn(response));
  });
  // Return to landing page
  document.querySelector('#nav-home').addEventListener('click', () => {
    landingPage();
  });
};

export default navEvents;
