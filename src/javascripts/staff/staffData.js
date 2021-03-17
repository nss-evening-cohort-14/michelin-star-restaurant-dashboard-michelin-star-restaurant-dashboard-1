import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json`)
    .then((response) => {
      if (response.data) {
        const staffArray = Object.values(response.data);
        resolve(staffArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const deleteStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/staff/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getStaff, deleteStaff };
