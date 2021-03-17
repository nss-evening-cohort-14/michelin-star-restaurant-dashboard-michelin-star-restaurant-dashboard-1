const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="view"></div>
    <div class="align-text-center my-3" id="stage"></div>
    <div id="modal-container"></div>
  </div>`;
};

export default domBuilder;
