import { getFilterMenuItems } from '../../helpers/data/menuIngredientsData';
import { showLoginMenuItems } from './menu';

const filterSubmit = (checkBoxes) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('filterMenuSubmit')) {
      getFilterMenuItems(checkBoxes).then((menuArray) => showLoginMenuItems(menuArray));
    }
  });
};

export default filterSubmit;
