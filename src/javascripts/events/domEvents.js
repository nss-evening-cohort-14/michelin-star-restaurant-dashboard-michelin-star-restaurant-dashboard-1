import { deleteReservation } from '../reservations/reservationData';
import { showUserReservations } from '../reservations/reservations';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components
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
