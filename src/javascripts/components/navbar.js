const navbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav">
        <a class="nav-link active" id="nav-menu" href="#">Menu</a>
        <a class="nav-link" id="nav-ingredients" href="#">Ingredients</a>
        <a class="nav-link" id="nav-staff" href="#">Staff</a>
        <a class="nav-link" id="nav-seating" href="#">Seating</a>
        <a class="nav-link" id="nav-reservations" href="#">Reservations</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" id="login-btn"></li> 
      </div>
    </div>
  </div>
</nav>`;
  document.querySelector('#navigation').innerHTML = domString;
};

export default navbar;
