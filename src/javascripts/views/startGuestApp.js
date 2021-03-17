import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import navbar from '../components/navbar';
import guestDomEvents from '../events/guestDomEvents';
import guestNavEvents from '../events/guestNavEvents';

const startGuestApp = () => {
  domBuilder();
  navbar();
  loginButton();
  guestDomEvents();
  guestNavEvents();
};

export default startGuestApp;
