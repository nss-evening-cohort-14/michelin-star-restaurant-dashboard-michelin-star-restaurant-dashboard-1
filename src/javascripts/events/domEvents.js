import { deleteIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import { createMenuItems, deleteMenuItems } from '../helpers/data/menuData';
import { deleteReservation } from '../helpers/data/reservationData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import { deleteStaff, getStaff } from '../helpers/data/staffData';
import createMenuItemForm from '../components/forms/createMenuItemForm';
import ingredientModal from '../components/forms/ingredientModal';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // Click Events for Ingredients
    if (e.target.id.includes('deleteIngredient')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this ingredient?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        deleteIngredients(firebaseKey).then((ingredients) => showLoginIngredients(ingredients));
      }
    }
    // DELETE MENU ITEM
    if (e.target.id.includes('delete-menu-item')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteMenuItems(firebaseKey).then((menuArray) => showLoginMenuItems(menuArray));
    }

    // SHOW FORM TO CREATE MENU ITEM
    if (e.target.id.includes('add-menu-btn')) {
      createMenuItemForm();
    }

    // SUBMIT CREATE MENU ITEM
    if (e.target.id.includes('create-menu-item')) {
      e.preventDefault();
      const itemObject = {
        image: document.querySelector('#itemImage').value,
        title: document.querySelector('#itemTitle').value,
        description: document.querySelector('#itemDescription').value,
        price: document.querySelector('#itemPrice').value
      };
      createMenuItems(itemObject).then((menuArray) => showLoginMenuItems(menuArray));
    }

    // Show Ingredients Modal
    if (e.target.id.includes('#showIngredients')) {
      ingredientModal();
    }

    // Delete Staff
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey)
        .then((staffArray) => getStaff(staffArray))
        .then((staffArray) => showStaff(staffArray, user));
    }

    // Delete Reservations
    if (e.target.id.includes('delete-res')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteReservation(firebaseKey).then((resArray) => showLoginReservations(resArray));
      }
    }
  });
};

export default domEvents;
