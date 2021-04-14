import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleReservation } from './reservationData';
import { getSeating, getSingleTable } from './seatingData';

const dbUrl = firebaseConfig.databaseURL;

const getSeatingReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json`)
    .then((response) => Object.values(response.data).map((entry) => {
      const tableIdPromise = getSingleTable(entry.table_id);
      const reservationIdPromise = getSingleReservation(entry.reservation_id);

      Promise.all([tableIdPromise, reservationIdPromise])
        .then(() => {
          // console.warn({ ...entry, tableInfo, reservationInfo });
        });
      return response;
    }))
    .catch((error) => reject(error));
});

const postSeatingResData = (seatingResObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/seating_reservations.json`, seatingResObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/seating_reservations/${response.data.name}.json`, body)
        .then(() => {
          getSeating().then((seatingArray) => resolve(seatingArray));
        });
    }).catch((error) => reject(error));
});

export {
  getSeatingReservations,
  postSeatingResData
};
