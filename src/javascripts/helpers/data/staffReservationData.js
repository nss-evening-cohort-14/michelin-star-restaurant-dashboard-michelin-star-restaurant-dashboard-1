import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleStaff, getStaff } from './staffData';

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
const getSingleStaffReservation = (staffId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff_reservation.json?orderBy="staff_id"&equalTo="${staffId}"`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});
const deleteStaffReservationRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/staff_reservation/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});
const getSingleReservationStaffInfo = (reservationId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff_reservation.json?orderBy="reservation_id"&equalTo="${reservationId}"`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});
const checkFullStaffing = (reservationId) => new Promise((resolve, reject) => {
  const jobArray = [];
  getSingleReservationStaffInfo(reservationId).then((response) => {
    const staffArray = Object.values(response).map((x) => getSingleStaff(x.staff_id));
    Promise.all(staffArray).then((array) => array.map((element) => {
      jobArray.push(element.job_title);
      return jobArray;
    })).then((x) => resolve(x));
  }).catch((error) => reject(error));
});
const toggleFullStaff = (array, reservationId) => new Promise((resolve, reject) => {
  let body = {};
  if (array.includes('Bartender') && array.includes('Waiter') && array.includes('General Manager') && array.includes('Line Cook')) {
    body = { fullyStaffed: true };
    axios.patch(`${dbUrl}/reservations/${reservationId}.json`, body);
  } else {
    body = { fullyStaffed: false };
  }
  axios.patch(`${dbUrl}/reservations/${reservationId}.json`, body)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
export {
  toggleFullStaff,
  getSingleStaffReservation,
  createStaffReservation,
  deleteStaffReservationRelationship,
  getSingleReservationStaffInfo,
  checkFullStaffing,
};
