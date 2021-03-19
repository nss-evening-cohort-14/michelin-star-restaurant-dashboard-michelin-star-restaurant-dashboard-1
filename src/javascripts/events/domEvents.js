import { createIngredient, deleteIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import { createMenuItems, deleteMenuItems } from '../helpers/data/menuData';
import { deleteReservation } from '../helpers/data/reservationData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import createMenuItemForm from '../components/forms/createMenuItemForm';
import ingredientModal from '../components/forms/ingredientModal';
import { createStaff, deleteStaff, getStaff } from '../helpers/data/staffData';
import formModal from '../components/forms/formModal';
import addIngredientForm from '../components/forms/addIngredientForm';
import addStaffForm from '../components/forms/addStaffForm';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // Click Events for Ingredients
    // Delete Ingredient
    if (e.target.id.includes('deleteIngredient')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this ingredient?')) {
        e.preventDefault();
        const firebaseKey = e.target.id.split('^^')[1];
        deleteIngredients(firebaseKey).then((ingredients) => showLoginIngredients(ingredients));
      }
    }
    // Create Ingredient
    if (e.target.id.includes('addIngredient')) {
      e.preventDefault();
      formModal('Add Ingredient');
      addIngredientForm();
    }
    // Submit Ingredient
    if (e.target.id.includes('submit-ingredient')) {
      e.preventDefault();
      const ingredientObject = {
        name: document.querySelector('#ingredientName').value
      };
      createIngredient(ingredientObject).then((ingredients) => showLoginIngredients(ingredients));
      $('#formModal').modal('toggle');
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
        price: document.querySelector('#itemPrice').value,
        available: document.querySelector('#available').checked
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
    // Add staff form
    if (e.target.id.includes('add-staff-member')) {
      e.preventDefault();
      formModal('Add Staff Member');
      addStaffForm();
    }
    if (e.target.id.includes('submit-staff')) {
      e.preventDefault();
      const staffObject = {
        first_name: document.querySelector('#new-first-name').value,
        last_name: document.querySelector('#new-last-name').value,
        job_title: document.querySelector('#new-position').value,
        image: document.querySelector('#new-image-url').value,
        bio: document.querySelector('#new-staff-bio').value,
      };

      createStaff(staffObject).then(() => getStaff()
        .then((staffArray) => showStaff(staffArray, user)));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
