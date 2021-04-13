import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import navbar from '../components/navbar';
import guestDomEvents from '../events/guestDomEvents';
import guestNavEvents from '../events/guestNavEvents';
import landingPage from './landingPage';

const startGuestApp = () => {
  domBuilder();
  navbar();
  loginButton();
  landingPage();
  guestDomEvents();
  guestNavEvents();
};

export default startGuestApp;
