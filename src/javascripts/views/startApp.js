import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import { domEvents } from '../events/domEvents';
import navEvents from '../events/navEvents';
import landingPage from './landingPage';

const startApp = (user) => {
  domBuilder();
  navbar(user);
  logoutButton();
  landingPage();
  domEvents(user);
  navEvents(user);
};

export default startApp;
