/* eslint-disable no-unused-vars */
import { getReservations } from './reservationData';
import { getSingleReservationStaffInfo } from './singleReservationData';
import { getStaff } from './staffData';

const reservationsWithStaff = () => new Promise((resolve, reject) => {
  Promise.all([getStaff(), getReservations(), getSingleReservationStaffInfo()])
    .then(([staffs, reservations, reservationStaffJoin]) => {
      const allReservationInfoArray = reservations.map((reservation) => {
        const resRelationshipsArray = reservationStaffJoin.filter((rs) => rs.reservation_id === reservation.id);
        const staffInfoArray = resRelationshipsArray.map((resRelationship) => staffs.find((staff) => staff.staff_id === resRelationship.staff_id));
        return { ...reservation, staffs: staffInfoArray };
      });
      resolve(allReservationInfoArray);
    });
// eslint-disable-next-line no-undef
}).catch((error) => reject(error));

export default reservationsWithStaff;
