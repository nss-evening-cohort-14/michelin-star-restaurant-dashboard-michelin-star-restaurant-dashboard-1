const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div class="d-flex flex-wrap justify-content-around" id="boards"></div>
  <div class="align-text-center my-3" id="stage"></div>
  <div id="form-container"></div>
  <div id="modal-container"></div>`;
};

export default domBuilder;
