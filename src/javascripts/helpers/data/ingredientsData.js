import axios from 'axios';
import firebaseConfig from '../apiKeys';

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

// Create calls
const createIngredient = (ingredientObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/ingredients.json`, ingredientObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/ingredients/${response.data.name}.json`, body)
        .then(() => {
          getIngredients().then((ingredientsArray) => resolve(ingredientsArray));
        });
    }).catch((error) => reject(error));
});

export { getIngredients, deleteIngredients, createIngredient };
