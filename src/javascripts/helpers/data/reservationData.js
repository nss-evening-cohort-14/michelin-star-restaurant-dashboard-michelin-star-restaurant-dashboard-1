import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reservations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getReservations;
