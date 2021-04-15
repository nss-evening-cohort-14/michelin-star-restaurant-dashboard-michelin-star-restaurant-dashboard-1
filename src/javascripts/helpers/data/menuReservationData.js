import axios from 'axios';
import { decreaseIngredientCount } from '../../components/menu/ingredientsFilter';
import firebaseConfig from '../apiKeys';
import { getIngredients } from './ingredientsData';
import { getMenuItems, getSingleMenuItem } from './menuData';
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

// const menuWithReservation = () => new Promise((resolve, reject) => {
//   Promise.all([getMenuItems(), getReservations(), getMenuReservation()])
//     .then(([menus, reservations, menuReservationsJoin]) => {
//       const allReservationInfoArray = reservations.map((reservation) => {
//         const reservationRelationshipsArray = menuReservationsJoin.filter((reservationGroup) => reservationGroup.reservation_id === reservation.firebaseKey);
//         const menuInfoArray = reservationRelationshipsArray.map((reservationRelationship) => menus.find((menu) => menu.firebaseKey === reservationRelationship.menu_item_id));
//         return { ...reservation, menus: menuInfoArray };
//       });
//       console.warn(allReservationInfoArray);
//     }).catch((error) => reject(error));
// });

const reduceIngredientCount = (firebaseKey, countObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/ingredients/${firebaseKey}.json`, countObj)
    .then(() => getReservations()).then((resArray) => resolve(resArray))
    .catch((error) => reject(error));
});

const changeMenuAvailability = (firebaseKey, menuObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/menu/${firebaseKey}.json`, menuObj)
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
        const ingredientSelectionRelationshipsArray = ingredients.find((ingredientSelection) => ingredientSelection.firebaseKey === selection.selectedIngredient);
        return ingredientSelectionRelationshipsArray;
      });
      // eslint-disable-next-line no-return-assign
      decreaseIngredientCount(ingredientSelectionArray);
      ingredientSelectionArray.forEach((item) => {
        const countObj = {
          quantity: item.quantity,
          available: item.available
        };
        reduceIngredientCount(`${item.firebaseKey}`, countObj);
      });
      console.warn(ingredientSelectionArray);
    }).catch((error) => reject(error));
});

const getMenuAndIngredients = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu_ingredients.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getMenuIngredientsTogether = () => new Promise((resolve, reject) => {
  Promise.all([getIngredients(), getMenuItems(), getMenuAndIngredients()])
    .then(([ingredients, menus, menuIngredientsJoin]) => {
      const allMenuIngredientsArray = menus.map((menu) => {
        const menuRelationshipsArray = menuIngredientsJoin.filter((mg) => mg.menu_id === menu.firebaseKey);
        const ingredientsInfoArray = menuRelationshipsArray.map((menuRelationship) => ingredients.find((ingredient) => ingredient.firebaseKey === menuRelationship.ingredient_id));
        return [{ ...menu }, ingredientsInfoArray];
      });
      allMenuIngredientsArray.forEach((e) => {
        const key = e[0].firebaseKey;
        const mappedArray = e[1].map((obj) => obj.available);
        if (mappedArray.includes(false)) {
          const menuObj = {
            available: false
          };
          changeMenuAvailability(key, menuObj);
        } else {
          const menuObj = {
            available: true
          };
          changeMenuAvailability(key, menuObj);
        }
      });
      resolve(allMenuIngredientsArray);
    }).catch((error) => reject(error));
});

export {
  createMenuReservation,
  getSingleMenuReservationInfo,
  deleteMenuReservationRelationship,
  getMenuReservation,
  getIngredientsFromMenu,
  reduceIngredientCount,
  getMenuAndIngredients,
  getMenuIngredientsTogether,
  changeMenuAvailability
};

// allMenuIngredientsArray.forEach((item) => {
//   const menuObj = {
//     availability: displayAvailability(allMenuIngredientsArray)
//   };
//   changeMenuAvailability(`${item.firebaseKey}`, menuObj);
// }).resolve(allMenuIngredientsArray);
// }).catch((error) => reject(error));
