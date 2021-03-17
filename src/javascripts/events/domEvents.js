import showStaff from '../components/showStaff';
import { deleteStaff } from '../helpers/staffData';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey)
        .then((staffArray) => showStaff(staffArray, user));
    }
  });
};

export default domEvents;
