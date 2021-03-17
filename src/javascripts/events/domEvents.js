import showStaff from '../staff/showStaff';
import { deleteStaff, getStaff } from '../staff/staffData';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Delete Staff
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey)
        .then((staffArray) => getStaff(staffArray))
        .then((staffArray) => showStaff(staffArray, user));
    }
  });
};

export default domEvents;
