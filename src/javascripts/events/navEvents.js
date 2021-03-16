const navEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Events for Navbar, READ only
    console.warn(e);
  });
};

export default navEvents;
