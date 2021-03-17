import showReservations from '../components/reservations';
import getReservations from '../helpers/data/reservationData';
import getIngredients from '../ingredients/ingredientsData';
import showIngredients from '../ingredients/showIngredients';

const guestNavEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Events for Navbar, READ only

    document.querySelector('#nav-reservations').addEventListener('click', () => {
      getReservations().then((reservations) => showReservations(reservations));
    });

    // Click event for Ingredients
    if (e.target.id.includes('nav-ingredients')) {
      e.preventDefault();
      getIngredients().then((ingredients) => showIngredients(ingredients));
    }
  });
};

export default guestNavEvents;
