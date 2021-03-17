import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API Calls for Ingredients
const dbUrl = firebaseConfig.databaseURL;

const getIngredients = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/ingredients.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getIngredients;
