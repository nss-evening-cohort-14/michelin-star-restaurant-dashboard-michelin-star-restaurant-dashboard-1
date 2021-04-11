import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getReservations, getSingleReservation } from './reservationData';
import { getSingleStaff } from './staffData';

const dbUrl = firebaseConfig.databaseURL;

const getSingleReservationStaffInfo = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff_reservation.json`)
    .then((response) => Object.values(response.data).map((entry) => {
      const staffId = getSingleStaff(entry.staff_id);
      const reservationId = getSingleReservation(entry.reservation_id);

      Promise.all([staffId, reservationId])
        .then(([staffInfo, reservationInfo]) => {
          console.warn({ ...entry, staffInfo, reservationInfo });
        });
      return response;
    }))
    .catch((error) => reject(error));
});

const createReservationStaff = (resStaffObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff_reservations.json`, resStaffObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff_reservations/${response.data.name}.json`, body)
        .then(() => {
          getReservations().then((staffResArray) => resolve(staffResArray));
        });
    }).catch((error) => reject(error));
});

export { createReservationStaff, getSingleReservationStaffInfo };
