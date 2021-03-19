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

// DELETE MENU ITEMS
const deleteMenuItems = (firebasekey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/menu/${firebasekey}.json`)
    .then(() => getMenuItems(uid).then((menuArray) => resolve(menuArray)))
    .catch((error) => reject(error));
});

export { getMenuItems, deleteMenuItems };
