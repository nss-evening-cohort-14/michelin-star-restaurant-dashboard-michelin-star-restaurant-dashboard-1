import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleReservation } from './reservationData';
import { getSingleTable } from './seatingData';

const dbUrl = firebaseConfig.databaseURL;

const getSeatingReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json`)
    .then((response) => Object.values(response.data).map((entry) => {
      const tableIdPromise = getSingleTable(entry.table_id);
      const reservationIdPromise = getSingleReservation(entry.reservation_id);

      Promise.all([tableIdPromise, reservationIdPromise])
        .then(([tableInfo, reservationInfo]) => {
          console.warn({ ...entry, tableInfo, reservationInfo });
        });
      return response;
    }))
    .catch((error) => reject(error));
});

export default getSeatingReservations;
