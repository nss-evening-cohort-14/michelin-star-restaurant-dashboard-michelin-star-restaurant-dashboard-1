const decreaseIngredientCount = (array) => {
  array.forEach((e) => {
    if (e.quantity > 0) {
      e.quantity -= 1;
      e.available = true;
    } else if (e.quantity <= 0) {
      e.available = false;
    }
  });
};

export default decreaseIngredientCount;
