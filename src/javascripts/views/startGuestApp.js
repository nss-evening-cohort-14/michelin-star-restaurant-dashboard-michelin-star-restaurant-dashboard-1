import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import navbar from '../components/navbar';

const startGuestApp = () => {
  domBuilder();
  navbar();
  loginButton();
};

export default startGuestApp;
