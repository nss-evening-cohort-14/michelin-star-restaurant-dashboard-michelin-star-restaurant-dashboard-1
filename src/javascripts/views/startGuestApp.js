import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import navbar from '../components/navbar';
import guestDomEvents from '../events/guestDomEvents';

const startGuestApp = () => {
  domBuilder();
  navbar();
  loginButton();
  guestDomEvents();
};

export default startGuestApp;
