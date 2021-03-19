import { createIngredient, deleteIngredients } from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import { deleteMenuItems } from '../helpers/data/menuData';
import { deleteReservation } from '../helpers/data/reservationData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import { deleteStaff, getStaff } from '../helpers/data/staffData';
import formModal from '../components/forms/formModal';
import addIngredientForm from '../components/forms/addIngredientForm';
import getMenuIngredients from '../helpers/data/menuIngredientsData';
import menuIngredients from '../components/forms/ingredientModal';

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
