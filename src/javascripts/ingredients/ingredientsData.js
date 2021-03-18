import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

// API Calls for Ingredients
const dbUrl = firebaseConfig.databaseURL;

// GET Calls
const getIngredients = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/ingredients.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Delete Calls

const deleteIngredients = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/ingredients/${firebaseKey}.json`)
    .then(() => getIngredients().then((ingredients) => resolve(ingredients)))
    .catch((error) => reject(error));
});

export { getIngredients, deleteIngredients };
