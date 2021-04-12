import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

const getSeating = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE TABLE
const getSingleTable = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getSeating,
  getSingleTable,
};
