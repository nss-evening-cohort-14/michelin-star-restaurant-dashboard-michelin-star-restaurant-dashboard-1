import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET RESERVATIONS
const getReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reservations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteReservation = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/reservations/${firebaseKey}.json`)
    .then(() => getReservations().then((resArray) => resolve(resArray)))
    .catch((error) => reject(error));
});

const createReservation = (resObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/reservations.json`, resObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/reservations/${response.data.name}.json`, body)
        .then(() => {
          getReservations().then((resArray) => resolve(resArray));
        });
    }).catch((error) => reject(error));
});

export { getReservations, deleteReservation, createReservation };
