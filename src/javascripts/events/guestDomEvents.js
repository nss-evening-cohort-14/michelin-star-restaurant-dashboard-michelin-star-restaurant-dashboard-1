const guestDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for READ on Guest App
    console.warn(e);
  });
};

export default guestDomEvents;
