import { createIngredient, deleteIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import { deleteMenuItems } from '../helpers/data/menuData';
import { createReservation, deleteReservation } from '../helpers/data/reservationData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import { deleteStaff, getStaff } from '../helpers/data/staffData';
import formModal from '../components/forms/formModal';
import addIngredientForm from '../components/forms/addIngredientForm';
import addReservationForm from '../components/forms/addReservationForm';

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
        deleteReservation(firebaseKey).then((resArray) => showLoginReservations(resArray));
      }
    }
  });
};

export default domEvents;
