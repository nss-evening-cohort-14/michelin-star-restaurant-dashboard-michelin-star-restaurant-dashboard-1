import { createIngredient, deleteIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import { createReservation, deleteReservation } from '../helpers/data/reservationData';
import { createMenuItems, deleteMenuItems } from '../helpers/data/menuData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import createMenuItemForm from '../components/forms/createMenuItemForm';
import {
  createStaff, deleteStaff, getSingleStaff, getStaff, updateStaff
} from '../helpers/data/staffData';
import formModal from '../components/forms/formModal';
import addIngredientForm from '../components/forms/addIngredientForm';
import getMenuIngredients from '../helpers/data/menuIngredientsData';
import menuIngredients from '../components/forms/ingredientModal';
import addReservationForm from '../components/forms/addReservationForm';
import addStaffForm from '../components/forms/addStaffForm';
import updateStaffForm from '../components/forms/updateStaffForm';

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

    // View Menu Ingredients
    if (e.target.id.includes('view-menu-ingredients')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getMenuIngredients(firebaseKey).then((menuItem) => menuIngredients(menuItem));
      formModal('Ingredients');
    }
    // CREATE RESERVATION FORM POPUP
    if (e.target.id.includes('addReservation')) {
      e.preventDefault();
      formModal('Add Reservation');
      addReservationForm();
    }

    // CREATE RESERVATION
    if (e.target.id.includes('submit-reservation')) {
      e.preventDefault();
      const resObject = {
        name: document.querySelector('#last-name').value,
        party_size: document.querySelector('#party-size').value,
        date: document.querySelector('#res-date').value,
        time: document.querySelector('#res-time').value,
        notes: document.querySelector('#res-notes').value,
      };
      createReservation(resObject).then((reservations) => showLoginReservations(reservations));
      $('#formModal').modal('toggle');
    }
    // SHOW FORM TO CREATE MENU ITEM
    if (e.target.id.includes('add-menu-btn')) {
      createMenuItemForm();
    }

    // SUBMIT CREATE MENU ITEM
    if (e.target.id.includes('create-menu-item')) {
      e.preventDefault();
      const checkBoxes = [];
      const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
      markedCheckbox.forEach((checkbox) => {
        if (checkbox.value !== 'on') {
          checkBoxes.push(checkbox.value);
        }
      });
      const itemObject = {
        image: document.querySelector('#itemImage').value,
        title: document.querySelector('#itemTitle').value,
        description: document.querySelector('#itemDescription').value,
        ingredients: checkBoxes,
        price: document.querySelector('#itemPrice').value,
        available: document.querySelector('#available').checked
      };
      createMenuItems(itemObject).then((menuArray) => showLoginMenuItems(menuArray));
    }

    // Show Ingredients Modal

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
    if (e.target.id.includes('update-staff')) {
      e.preventDefault();
      formModal('Update Staff Info');
      const firebaseKey = e.target.id.split('--')[1];
      getSingleStaff(firebaseKey).then((staffObject) => updateStaffForm(staffObject));
    }

    if (e.target.id.includes('submit-update-staff')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const staffObject = {
        first_name: document.querySelector('#update-first-name').value,
        last_name: document.querySelector('#update-last-name').value,
        job_title: document.querySelector('#update-position').value,
        image: document.querySelector('#update-image-url').value,
        bio: document.querySelector('#update-staff-bio').value,
      };
      updateStaff(firebaseKey, staffObject).then(() => getStaff()
        .then((staffArray) => showStaff(staffArray)));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
