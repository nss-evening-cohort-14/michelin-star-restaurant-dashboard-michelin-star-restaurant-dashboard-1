<<<<<<< HEAD
import { showUserMenuItems } from '../menu items/menu';
import { deleteMenuItems } from '../menu items/menuData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // DELETE MENU ITEM
    if (e.target.id.includes('delete-menu-item')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteMenuItems(firebaseKey).then((menuArray) => showUserMenuItems(menuArray));
=======
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
>>>>>>> development
    }
  });
};

export default domEvents;
