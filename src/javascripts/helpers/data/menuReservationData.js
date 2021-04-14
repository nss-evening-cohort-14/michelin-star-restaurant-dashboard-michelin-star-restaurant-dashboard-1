import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getIngredients } from './ingredientsData';
import { getSingleMenuItem } from './menuData';
import { getReservations } from './reservationData';

const dbUrl = firebaseConfig.databaseURL;

const getMenuReservation = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu_item_reservation.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createMenuReservation = (menuReservationObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menu_item_reservation.json`, menuReservationObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/menu_item_reservation/${response.data.name}.json`, body)
        .then(() => {
          getReservations().then((menuArray) => resolve(menuArray))
            .catch((error) => reject(error));
        });
    });
});

const getSingleMenuReservationInfo = (reservationId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu_item_reservation.json?orderBy="reservation_id"&equalTo="${reservationId}"`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

const deleteMenuReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/menu_item_reservation/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// Getting menu and ingredients relationships
const getIngredientsFromMenu = (menuReservationObject) => new Promise((resolve, reject) => {
  Promise.all([getSingleMenuItem(menuReservationObject.menu_item_id), getIngredients()])
    .then(([selectedIngredients, ingredients]) => {
      const selections = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < selectedIngredients.ingredients.length; i++) {
        selections.push({
          selectedIngredient: selectedIngredients.ingredients[i]
        });
      }
      const ingredientSelectionArray = selections.map((selection) => {
        const ingredientSelectionRelationshipsArray = ingredients.filter((ingredientSelection) => ingredientSelection.firebaseKey === selection.selectedIngredient);
        return { ...selection, matchedIngredient: ingredientSelectionRelationshipsArray };
      });
      console.warn(ingredientSelectionArray);
    }).catch((error) => reject(error));
});

const updateIngredientCount = (firebaseKey, countObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/ingredients/${firebaseKey}.json`, countObj)
    .then(() => getReservations()).then((resArray) => resolve(resArray))
    .catch((error) => reject(error));
});

export {
  createMenuReservation,
  getSingleMenuReservationInfo,
  deleteMenuReservationRelationship,
  getMenuReservation,
  getIngredientsFromMenu,
  updateIngredientCount
};
