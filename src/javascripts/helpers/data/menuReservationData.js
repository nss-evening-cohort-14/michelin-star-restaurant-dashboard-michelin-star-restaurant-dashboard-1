import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getReservations } from './reservationData';

const dbUrl = firebaseConfig.databaseURL;
const createMenuReservation = (menuReservationObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/menu_item_reservation.json`, menuReservationObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/menu_item_reservation.json`, body)
        .then(() => {
          getReservations().then((menuArray) => resolve(menuArray))
            .catch((error) => reject(error));
        });
    });
});

const getSingleMenuReservationInfo = (menuId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menu_item_reservation.json?orderBy="menu_item_id"&equalTo="${menuId}`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

const deleteMenuReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/menu_item_reservation/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { createMenuReservation, getSingleMenuReservationInfo, deleteMenuReservationRelationship };
