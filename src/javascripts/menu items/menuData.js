import axios from 'axios';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getMenuItems;
