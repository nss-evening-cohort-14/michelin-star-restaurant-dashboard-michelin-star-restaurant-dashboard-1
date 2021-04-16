const decreaseIngredientCount = (array) => {
  array.forEach((e) => {
    if (e.quantity === 0) {
      e.quantity = 0;
      e.available = false;
    } else if (e.quantity === 1) {
      e.quantity -= 1;
      e.available = false;
    } else {
      e.available = true;
      e.quantity -= 1;
    }
  });
};

export default decreaseIngredientCount;
