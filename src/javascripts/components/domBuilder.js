const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div class="d-flex flex-wrap justify-content-around" id="view"></div>
<<<<<<< HEAD
=======
    <div class="align-text-center my-3" id="stage"></div>
>>>>>>> 1fec74143e1029eb5c443b2016741c02995b3521
    <div id="modal-container"></div>
  </div>`;
};

export default domBuilder;
