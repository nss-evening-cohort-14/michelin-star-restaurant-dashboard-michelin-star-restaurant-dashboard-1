import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getReservations, getSingleReservation } from './reservationData';
import { getSeating, getSingleTable } from './seatingData';

const dbUrl = firebaseConfig.databaseURL;

const getSeatingReservationJoin = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json`)
  .then((response) => resolve(Object.values(response.data)))
  .catch((error) => reject(error));
});

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

const getSingleSeatingReservationInfo = (tableId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/seating_reservations.json?orderBy="table_id"&equalTo="${tableId}"`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

const deleteSeatingReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/seating_reservations/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const allTableReservations = () => new Promise((resolve, reject) => {
  Promise.all([getReservations(), getSeating(), getSeatingReservationJoin()])
    .then(([reservations, seatings, reservationSeatingJoin]) => {

    }).catch((error) => reject(error));
});

export {
  getSeatingReservations,
  postSeatingResData,
  getSingleSeatingReservationInfo,
  deleteSeatingReservationRelationship
};