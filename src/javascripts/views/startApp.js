import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';

const startApp = () => {
  domBuilder();
  navbar();
  logoutButton();
};

export default startApp;
