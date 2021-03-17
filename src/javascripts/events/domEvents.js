import { showUserMenuItems } from '../menu items/menu';
import { deleteMenuItems } from '../menu items/menuData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components

    // DELETE MENU ITEM
    if (e.target.id.includes('delete-menu-item')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteMenuItems(firebaseKey).then((menuArray) => showUserMenuItems(menuArray));
    }
  });
};

export default domEvents;
