const trialMenu = (response) => {
  response.forEach((item) => {
    console.warn(item.firebaseKey);
  });
};

export default trialMenu;
