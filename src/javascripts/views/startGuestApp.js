import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import navbar from '../components/navbar';
import guestDomEvents from '../events/guestDomEvents';
import navEvents from '../events/navEvents';

const startGuestApp = () => {
  domBuilder();
  navbar();
  loginButton();
  guestDomEvents();
  navEvents();
};

export default startGuestApp;
