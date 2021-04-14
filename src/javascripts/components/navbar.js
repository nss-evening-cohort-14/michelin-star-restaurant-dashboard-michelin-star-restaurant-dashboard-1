const navbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg justify-content-center">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav">
        <a class="nav-link active" href="#" id="nav-home">Home</a>
        <a class="nav-link" id="nav-menu" href="#">Menu</a>
        <a class="nav-link" id="nav-ingredients" href="#">Ingredients</a>
        <a class="nav-link" id="nav-staff" href="#">Staff</a>
        <a class="nav-link" id="nav-seating" href="#">Seating</a>
        <a class="nav-link" id="nav-reservations" href="#">Reservations</a>
      </div>
    </div>
    <div class="nav-item" id="login-btn"></div> 
  </div>
</nav>`;
  document.querySelector('#navigation').innerHTML = domString;
};

export default navbar;
