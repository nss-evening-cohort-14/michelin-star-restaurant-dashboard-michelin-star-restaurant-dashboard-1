const decreaseIngredientCount = (array) => {
  array.forEach((e) => {
    if (e.quantity > 0) {
      e.quantity -= 1;
      e.available = true;
    } else {
      e.available = false;
    }
  });
};

const displayAvailability = (array) => {
  array.forEach((e) => {
    if (e.ingredients.available === false) {
      e.available = false;
    } else if (e.ingredients.available === true) {
      e.available = true;
    }
  });
};

export { decreaseIngredientCount, displayAvailability };
