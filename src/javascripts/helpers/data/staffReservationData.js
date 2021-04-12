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
const fullyStaffed = (reservationId) => {
  getSingleReservationStaffInfo(reservationId).then((response) => {
    const staffArray = Object.values(response).map((x) => getSingleStaff(x.staff_id));
    const jobArray = [];
    Promise.all(staffArray).then((array) => array.map((element) => {
      const newArray = jobArray;
      newArray.push(element.job_title);
      if (newArray.includes('Bartender') && newArray.includes('Waiter') && newArray.includes('General Manager') && newArray.includes('Line Cook')) {
        const body = { fullyStaffed: true };
        axios.patch(`${dbUrl}/reservations/${reservationId}.json`, body);
      } else {
        const body = { fullyStaffed: false };
        axios.patch(`${dbUrl}/reservations/${reservationId}.json`, body);
      }
      return newArray;
    }));
  });
};
export {
  getSingleStaffReservation,
  createStaffReservation,
  deleteStaffReservationRelationship,
  getSingleReservationStaffInfo,
  fullyStaffed,
};
