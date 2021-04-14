import axios from 'axios';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET MENU ITEMS
const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE MENU ITEM
const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET SINGLE MENU ITEM INGREDIENT
const getSingleMenuItemIngredients = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu/${firebaseKey}.json`)
    .then((response) => resolve(response.data.ingredients))
    .catch((error) => reject(error));
});

// DELETE MENU ITEMS
const deleteMenuItems = (firebasekey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/menu/${firebasekey}.json`)
    .then(() => getMenuItems().then((menuArray) => resolve(menuArray)))
    .catch((error) => reject(error));
});

// CREATE MENU ITEM
const createMenuItems = (menuObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menu.json`, menuObject)
    .then((response) => {
      const frame = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/menu/${response.data.name}.json`, frame)
        .then(() => {
          getMenuItems().then((menuArray) => resolve(menuArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE MENU ITEMS
const updateMenuItems = (firebaseKey, menuObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/menu/${firebaseKey}.json`, menuObject)
    .then(() => getMenuItems()).then((menuArray) => resolve(menuArray))
    .catch((error) => reject(error));
});

export {
  getMenuItems, deleteMenuItems, createMenuItems, getSingleMenuItemIngredients, updateMenuItems, getSingleMenuItem
};
