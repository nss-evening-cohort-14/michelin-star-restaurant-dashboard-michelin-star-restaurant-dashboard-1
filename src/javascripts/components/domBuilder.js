const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div class="d-flex flex-wrap justify-content-around" id="view"></div>
    <div id="modal-container"></div>
  </div>`;
};

export default domBuilder;
