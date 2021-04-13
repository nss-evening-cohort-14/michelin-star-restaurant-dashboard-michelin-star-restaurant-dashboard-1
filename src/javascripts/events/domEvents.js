import firebase from 'firebase/app';
import 'firebase/auth';
import {
  createIngredient, deleteIngredients, getSingleIngredient, updateIngredient
} from '../helpers/data/ingredientsData';
import { showLoginIngredients } from '../components/ingredients/showIngredients';
import { showLoginMenuItems } from '../components/menu/menu';
import {
  createReservation, deleteReservation, getSingleReservation, updateReservation
} from '../helpers/data/reservationData';
import {
  createMenuItems, deleteMenuItems, getSingleMenuItem, getSingleMenuItemIngredients, updateMenuItems
} from '../helpers/data/menuData';
import { showLoginReservations } from '../components/reservations/reservations';
import showStaff from '../components/staff/showStaff';
import createMenuItemForm from '../components/forms/createMenuItemForm';
import {
  createStaff, deleteStaff, filterPosition, getSingleStaff, getStaff, updateStaff
} from '../helpers/data/staffData';
import formModal from '../components/forms/formModal';
import addIngredientForm from '../components/forms/addIngredientForm';
import { getMenuIngredients } from '../helpers/data/menuIngredientsData';
import menuIngredients from '../components/forms/ingredientModal';
import addReservationForm from '../components/forms/addReservationForm';
import addStaffForm from '../components/forms/addStaffForm';
import editIngredientForm from '../components/forms/editIngredientForm';
import updateStaffForm from '../components/forms/updateStaffForm';
import editReservationForm from '../components/forms/editReservationForm';
import editMenuItemForm from '../components/forms/editMenuItems';
import filterSubmit from '../components/menu/filterSubmit';
import { createStaffReservation, deleteStaffReservationRelationship, getSingleStaffReservationInfo } from '../helpers/data/staffReservationData';
import {
  createMenuReservation, deleteMenuReservationRelationship, getIngredientsFromMenu, getSingleMenuReservationInfo
} from '../helpers/data/menuReservationData';
import { getSingleTable } from '../helpers/data/seatingData';
import editSeatingForm from '../components/forms/editSeatingForm';
import { postSeatingResData } from '../helpers/data/seatingReservationsData';
import showSeating from '../components/seating/seating';

const domEventListeners = (e) => {
  const user = firebase.auth().currentUser;
  // Click Events for Ingredients
  // Delete Ingredient
  if (e.target.id.includes('deleteIngredient')) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Want to delete this ingredient?')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
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

  // Edit Ingredient
  if (e.target.id.includes('editIngredient')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Ingredient');
    getSingleIngredient(firebaseKey).then((ingredient) => editIngredientForm(ingredient));
  }

  // Submit on Edit Ingredient Form
  if (e.target.id.includes('submitEditIngredient')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    const ingredientObject = {
      firebaseKey,
      name: document.querySelector('#newIngredientName').value,
      quantity: document.querySelector('#ingredientCount').value
    };
    updateIngredient(firebaseKey, ingredientObject).then((ingredients) => showLoginIngredients(ingredients));
    $('#formModal').modal('toggle');
  }

  // DELETE MENU ITEM
  if (e.target.id.includes('delete-menu-item')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteMenuItems(firebaseKey).then((menuArray) => showLoginMenuItems(menuArray));
  }

  // SHOW MENU INGREDIENTS
  if (e.target.id.includes('view-menu-ingredients')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    getMenuIngredients(firebaseKey).then((menuItem) => menuIngredients(menuItem));
    formModal('Ingredients');
  }

  // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A RESERVATION
  if (e.target.id.includes('edit-res-btn')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Reservation');
    getSingleReservation(firebaseKey).then((resObject) => editReservationForm(resObject));
  }

  // CLICK EVENT FOR EDITING A RESERVATION
  if (e.target.id.includes('update-res')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    const resObject = {
      name: document.querySelector('#last-name').value,
      party_size: document.querySelector('#party-size').value,
      date: document.querySelector('#res-date').value,
      time: document.querySelector('#res-time').value,
      notes: document.querySelector('#res-notes').value,
    };
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    markedCheckbox.forEach((checkbox) => {
      if (checkbox.value !== '') {
        const menuReservationObject = {
          menu_item_id: checkbox.value,
          reservation_id: firebaseKey
        };
        getIngredientsFromMenu(menuReservationObject);
        createMenuReservation(menuReservationObject).then((response) => showLoginReservations(response, user));
      }
    });
    let deleteArray;
    const unmarkedCheckbox = document.querySelectorAll('input[type="checkbox"]');
    unmarkedCheckbox.forEach((checkbox) => {
      if (checkbox.checked === false) {
        getSingleMenuReservationInfo(firebaseKey).then((x) => {
          deleteArray = Object.values(x).map((element) => element.firebaseKey);
          return deleteArray;
        }).then(() => {
          const deleteRelationships = deleteArray.map((key) => deleteMenuReservationRelationship(key).then());
          Promise.all(deleteRelationships);
        });
      }
    });

    updateReservation(firebaseKey, resObject).then((resArray) => showLoginReservations(resArray));
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
    };
    if (itemObject.ingredients.length < 1) {
      // eslint-disable-next-line no-alert
      window.confirm('Please add at least 1 Ingredient');
    } else {
      createMenuItems(itemObject).then((menuArray) => showLoginMenuItems(menuArray));
    }
  }

  // SHOW FORM TO EDIT MENU ITEM
  if (e.target.id.includes('edit-menu-item')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Edit Menu');
    getSingleMenuItem(firebaseKey).then((menuObject) => editMenuItemForm(menuObject));
  }

  // Filter Menu Items
  if (e.target.id.includes('filterIngredientCheckbox')) {
    const checkBoxes = [];
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    markedCheckbox.forEach((checkbox) => {
      checkBoxes.push(checkbox.value);
    });
    filterSubmit(checkBoxes);
  }

  // SUBMIT EDIT MENU ITEM
  if (e.target.id.includes('update-menu-item')) {
    const firebaseKey = e.target.id.split('--')[1];
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
    };
    if (itemObject.ingredients.length < 1) {
      // eslint-disable-next-line no-alert
      window.confirm('Please add at least 1 Ingredient');
    } else {
      updateMenuItems(firebaseKey, itemObject).then((menuArray) => showLoginMenuItems(menuArray));
    }
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

  if (e.target.id.includes('edit-this-staff')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    const staffObject = {
      first_name: document.querySelector('#update-first-name').value,
      last_name: document.querySelector('#update-last-name').value,
      job_title: document.querySelector('#update-position').value,
      image: document.querySelector('#update-image-url').value,
      bio: document.querySelector('#update-bio').value,
    };
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    markedCheckbox.forEach((checkbox) => {
      if (checkbox.value !== '') {
        const staffReservationObject = {
          staff_id: firebaseKey,
          reservation_id: checkbox.value
        };
        createStaffReservation(staffReservationObject).then((response) => showStaff(response, user));
        getSingleMenuItemIngredients(staffReservationObject);
      }
    });
    let deleteArray; // Needed to create a variable outside of the function scope below
    const unmarkedCheckbox = document.querySelectorAll('input[type="checkbox"]'); // Create an array of all the checkboxes
    unmarkedCheckbox.forEach((checkbox) => {
      // If a box is unchecked we need to run the code block to find unchecked relationships and delete them from firebase
      if (checkbox.checked === false) {
        getSingleStaffReservationInfo(firebaseKey).then((x) => {
          deleteArray = Object.values(x).map((element) => element.firebaseKey);
          return deleteArray;
        }).then(() => {
          const deleteRelationships = deleteArray.map((key) => deleteStaffReservationRelationship(key).then());
          Promise.all(deleteRelationships);
        });
      }
    });
    updateStaff(firebaseKey, staffObject).then(() => getStaff()
      .then((staffArray) => showStaff(staffArray, user)));

    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('filter-staff-submit')) {
    const value = document.getElementById('filter-all-staff');
    const filteredStaffOption = value.options[value.selectedIndex].value;
    if (filteredStaffOption === 'all-staff') {
      getStaff().then((staffArray) => showStaff(staffArray, user));
    } else {
      filterPosition(filteredStaffOption).then((response) => showStaff(response, user));
    }
  }
  // Get single staff members reservations that they are assigned to
  if (e.target.id.includes('staff-btn')) {
    const firebaseKey = e.target.id.split('--')[1];
    getSingleStaff(firebaseKey).then((response) => console.warn(response));
  }

  // event for showing edit seating modal
  if (e.target.id.includes('edit-table')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Assign Table to Rservation');
    getSingleTable(firebaseKey).then((pinObject) => editSeatingForm(pinObject));
  }
  // send data to seatingReservation node
  if (e.target.id.includes('update-table')) {
    const firebaseKey = e.target.id.split('--')[1];
    e.preventDefault();
    const seatingResObject = {
      reservation_id: document.querySelector('#reservation-option').value,
      table_id: firebaseKey
    };
    postSeatingResData(seatingResObject).then((seatingArray) => showSeating(seatingArray));
    $('#formModal').modal('toggle');
  }
};

const domEvents = () => {
  document.querySelector('body').addEventListener('click', domEventListeners);
};

export { domEvents, domEventListeners };
