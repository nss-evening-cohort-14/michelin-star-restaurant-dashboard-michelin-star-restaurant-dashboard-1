import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getReservations } from './reservationData';

const dbUrl = firebaseConfig.databaseURL;

const getSingleReservationStaffInfo = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff_reservations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const mergeReservationStaff = () => ((resolve, reject) => {
  Promise.all([getReservations(), getSingleReservationStaffInfo()])
    .then(([reservations, staffReservations]) => {
      const allReservationInfoArray = reservations.map((reservation) => {
        const reservationRelationshipsArray = staffReservations.filter((rs) => rs.reservation_id === reservation.id);
        return { ...reservation, count: reservationRelationshipsArray.length };
      });
      resolve(allReservationInfoArray);
    }).catch((error) => reject(error));
});

export { mergeReservationStaff, getSingleReservationStaffInfo };
