import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET RESERVATIONS
const getReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reservations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteReservation = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/reservations/${firebaseKey}.json`)
    .then(() => getReservations().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});

export { getReservations, deleteReservation };
