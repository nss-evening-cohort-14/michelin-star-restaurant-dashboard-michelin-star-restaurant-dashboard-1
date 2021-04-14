import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
