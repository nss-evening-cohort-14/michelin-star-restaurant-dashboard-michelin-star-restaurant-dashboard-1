import axios from 'axios';
import firebaseConfig from '../apiKeys';

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

const createStaff = (objectBody) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff.json`, objectBody)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff/${response.data.name}.json`, body)
        .then(() => {
          getStaff().then((staffArray) => resolve(staffArray));
        });
    }).catch((error) => reject(error));
});

export { getStaff, deleteStaff, createStaff };
