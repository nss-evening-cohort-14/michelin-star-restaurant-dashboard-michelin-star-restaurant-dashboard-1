import showStaff from '../components/showStaff';
import getStaff from '../helpers/staffData';

const navEvents = () => {
  document.querySelector('#nav-staff').addEventListener('click', () => {
    getStaff().then((staffArray) => showStaff(staffArray));
  });
};
export default navEvents;
