const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div class="align-text-center my-3" id="stage"></div>
    <div id="form-container"></div>
    <div id="filter-container"></div>
    <div id="view"></div>
    <div id="modal-container"></div>
  </div>`;
};

export default domBuilder;
