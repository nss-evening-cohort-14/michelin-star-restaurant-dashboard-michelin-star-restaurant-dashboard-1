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

const getSingleStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff/${firebaseKey}.json`)
    .then((reponse) => resolve(reponse.data))
    .catch((error) => reject(error));
});

const updateStaff = (firebaseKey, staffObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/staff/${firebaseKey}.json`, staffObject)
    .then(() => getStaff().then((staffArray) => resolve(staffArray)))
    .catch((error) => reject(error));
});

const filterPosition = (position) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json?orderBy="job_title"&equalTo="${position}"`)
    .then((response) => resolve([response.data]))
    .catch((error) => reject(error));
});

export {
  getStaff, deleteStaff, createStaff, updateStaff, getSingleStaff, filterPosition
};
