import firebase from 'firebase/app';
import 'firebase/auth';
import { domEvents } from '../events/domEvents';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  document.querySelector('body').removeEventListener('click', domEvents);
};

export default signIn;
