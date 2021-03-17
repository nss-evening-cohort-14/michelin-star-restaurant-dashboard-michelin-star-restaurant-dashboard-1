const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for CUD on components
    console.warn(e);
  });
};

export default domEvents;
