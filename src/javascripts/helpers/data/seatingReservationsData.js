import axios from 'axios';
import firebaseConfig from '../apiKeys';
// import { getSingleReservation } from './reservationData';
// import { getSingleTable } from './seatingData';

const dbUrl = firebaseConfig.databaseURL;

const getSeatingReservationJoin = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const getSeatingReservations = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/seating_reservations.json`)
//     .then((response) => Object.values(response.data).map((entry) => {
//       const tableIdPromise = getSingleTable(entry.table_id);
//       const reservationIdPromise = getSingleReservation(entry.reservation_id);

//       Promise.all([tableIdPromise, reservationIdPromise])
//         .then(() => {
//           // console.warn({ ...entry, tableInfo, reservationInfo });
//         });
//       return response;
//     }))
//     .catch((error) => reject(error));
// });

const postSeatingResData = (seatingResObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/seating_reservations.json`, seatingResObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/seating_reservations/${response.data.name}.json`, body)
        .then(() => {
          getSeatingReservationJoin().then((array) => resolve(array));
        });
    }).catch((error) => reject(error));
});

const getSingleSeatingReservationInfo = (reservationId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json?orderBy="reservation_id"&equalTo="${reservationId}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// const getSingleSeatingRes = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/seating_reservations/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

const deleteSeatingReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/seating_reservations/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getFilteredTables = (value) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating.json?orderBy="table_capacity"&startAt=${value}`)
    .then((response) => resolve(Object.values(response.data)))
    .then((error) => reject(error));
});

const updateTableRes = (firebaseKey, tableResObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/seating_reservations.json?orderBy="reservation_id"&equalTo="${firebaseKey}"`, tableResObj)
    .then(() => getSeatingReservationJoin()).then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  postSeatingResData,
  getSingleSeatingReservationInfo,
  deleteSeatingReservationRelationship,
  getFilteredTables,
  updateTableRes,
  getSeatingReservationJoin
};
