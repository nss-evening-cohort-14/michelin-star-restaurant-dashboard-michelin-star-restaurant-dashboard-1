import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  navbar(user);
  logoutButton();
  domEvents();
  navEvents(user);
};

export default startApp;
