import axios from "axios";

import firebase from 'firebase/app';
import 'firebase/auth';

const dbUrl = "https://michelin-star-restaurant-default-rtdb.firebaseio.com/";

const getMenuItems = () => new Promise((resolve,reject) => {
  axios.get(`${dbUrl}/menu.json`)
  .then((response) => console.warn(response.data))
  .catch((error) => reject(error));
});

export default getMenuItems;
