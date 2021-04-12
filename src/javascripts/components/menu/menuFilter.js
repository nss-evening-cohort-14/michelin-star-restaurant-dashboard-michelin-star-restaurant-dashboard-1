import { getSingleMenuItemIngredients } from '../../helpers/data/menuData';

const menuFilter = () => {
  getSingleMenuItemIngredients().then((response) => console.warn(response));
};

export default menuFilter;
