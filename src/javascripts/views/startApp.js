import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import { domEvents } from '../events/domEvents';
import navEvents from '../events/navEvents';
import getSeatingReservations from '../helpers/data/seatingReservationsData';

const startApp = (user) => {
  domBuilder();
  navbar(user);
  logoutButton();
  domEvents(user);
  navEvents(user);
  getSeatingReservations();
};

export default startApp;
