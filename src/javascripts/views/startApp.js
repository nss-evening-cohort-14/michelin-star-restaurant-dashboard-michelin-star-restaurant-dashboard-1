import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import { domEvents } from '../events/domEvents';
import toggleDisable from '../events/editStaffModalEvents';
import navEvents from '../events/navEvents';
import { getSeatingReservations } from '../helpers/data/seatingReservationsData';

const startApp = (user) => {
  domBuilder();
  navbar(user);
  logoutButton();
  domEvents(user);
  toggleDisable();
  navEvents(user);
  getSeatingReservations();
};

export default startApp;
