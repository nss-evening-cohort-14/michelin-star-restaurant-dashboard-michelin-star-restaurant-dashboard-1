import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../views/startApp';
import startGuestApp from '../views/startGuestApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
    } else {
      // person is NOT logged in
      startGuestApp();
    }
  });
};

export default checkLoginStatus;
