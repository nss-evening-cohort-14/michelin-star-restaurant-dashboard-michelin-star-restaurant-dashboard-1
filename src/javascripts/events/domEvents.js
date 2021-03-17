import { deleteIngredients } from '../ingredients/ingredientsData';
import { showUserIngredients } from '../ingredients/showIngredients';
import { showUserMenuItems } from '../menu items/menu';
import { deleteMenuItems } from '../menu items/menuData';
import { deleteReservation } from '../reservations/reservationData';
import { showUserReservations } from '../reservations/reservations';
import showStaff from '../staff/showStaff';
import { deleteStaff, getStaff } from '../staff/staffData';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // Click Events for Ingredients
    if (e.target.id.includes('deleteIngredient')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this ingredient?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        deleteIngredients(firebaseKey).then((ingredients) => showUserIngredients(ingredients));
      }
    }
    // DELETE MENU ITEM
    if (e.target.id.includes('delete-menu-item')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteMenuItems(firebaseKey).then((menuArray) => showUserMenuItems(menuArray));
    }

    // Delete Staff
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey)
        .then((staffArray) => getStaff(staffArray))
        .then((staffArray) => showStaff(staffArray, user));
    }
    if (e.target.id.includes('delete-res')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteReservation(firebaseKey).then((resArray) => showUserReservations(resArray));
      }
    }
  });
};

export default domEvents;
