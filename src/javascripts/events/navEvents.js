import showReservations from '../components/reservations';
import getReservations from '../helpers/data/reservationData';

const navEvents = () => {
  // Events for Navbar, READ only
  document.querySelector('#nav-reservations').addEventListener('click', () => {
    getReservations().then((reservations) => showReservations(reservations));
  });
};

export default navEvents;
