import { deleteReservation } from '../reservations/reservationData';
import { showUserReservations } from '../reservations/reservations';
import showStaff from '../staff/showStaff';
import { deleteStaff, getStaff } from '../staff/staffData';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Delete Staff
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey)
        .then((staffArray) => getStaff(staffArray))
        .then((staffArray) => showStaff(staffArray, user));
    }
    if (e.target.id.includes('delete-res')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteReservation(firebaseKey).then((resArray) => showUserReservations(resArray));
      }
    }
  });
};

export default domEvents;
