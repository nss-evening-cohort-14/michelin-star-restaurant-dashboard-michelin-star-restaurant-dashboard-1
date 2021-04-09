import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// const getSeatingReservations = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/seating_reservations.json`)
//     .then((response) => resolve(Object.values(response.data).map((response => {
//     const tableId = response.data.table_id;
//       const reservationId = response.data.reservation_id;
//       Promise.all([tableId, reservationId])
//       .then(([tableInfo, reservationInfo]) => {
//       console.warn({ ...response, tableInfo, reservationInfo} )
//     })
//   }))))
//   .catch((error) => reject(error));
// });

const getSeatingReservations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json`)
    .then((response) => console.warn(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getSeatingReservations;
