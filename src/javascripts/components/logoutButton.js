import firebase from 'firebase/app';
import 'firebase/auth';
import { domEventListeners } from '../events/domEvents';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-btn').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
  document.querySelector('body').removeEventListener('click', domEventListeners);
};

export default logoutButton;
