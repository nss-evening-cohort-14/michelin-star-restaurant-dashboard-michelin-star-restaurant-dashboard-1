import baguetteLogo from '../../images/baguette-logo.png';

const landingPage = () => {
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#masthead').innerHTML = `<header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <img id="landing-logo" src=${baguetteLogo} alt="page logo">
          </div>
        </div>
      </div>
    </header>`;
  document.querySelector('#view').innerHTML = '';
};

export default landingPage;
