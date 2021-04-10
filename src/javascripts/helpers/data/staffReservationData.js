import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getStaff } from './staffData';

const dbUrl = firebaseConfig.databaseURL;
const createStaffReservation = (staffReservationObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff_reservation.json`, staffReservationObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff_reservation/${response.data.name}.json`, body)
        .then(() => {
          getStaff().then((staffArray) => resolve(staffArray))
            .catch((error) => reject(error));
        });
    });
});
const getSingleStaffReservationInfo = (staffId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff_reservation.json?orderBy="staff_id"&equalTo="${staffId}"`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});
const deleteStaffReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/staff_reservation/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getSingleStaffReservationInfo, createStaffReservation, deleteStaffReservationRelationship };
