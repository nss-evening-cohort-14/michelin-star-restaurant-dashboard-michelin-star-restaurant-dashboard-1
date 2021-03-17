import axios from 'axios';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET MENU ITEMS
const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Create Menu Items
const createMenuItems = (menuObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menu.json`, menuObject)
    .then((response) => {
      const frame = { firebasekey: response.data.name };
      axios.patch(`${dbUrl}/menu/${response.data.name}.json`, frame)
        .then(() => {
          getMenuItems(uid).then((menuArray) => console.warn(menuArray));
        });
    }).catch((error) => reject(error));
});

export { getMenuItems, createMenuItems };
