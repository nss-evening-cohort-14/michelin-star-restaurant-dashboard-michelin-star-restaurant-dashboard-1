import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../events/domEvents';

const signMeOut = () => {
  firebase.auth().signOut();
  document.querySelector('body').removeEventListener('click', domEvents);
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-btn').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
