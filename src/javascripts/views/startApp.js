import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import { domEvents } from '../events/domEvents';
import navEvents from '../events/navEvents';
import { menuWithReservation } from '../helpers/data/menuReservationData';
import { getSeatingReservations } from '../helpers/data/seatingReservationsData';

const startApp = (user) => {
  domBuilder();
  navbar(user);
  logoutButton();
  domEvents(user);
  navEvents(user);
  getSeatingReservations();
  menuWithReservation();
};

export default startApp;
