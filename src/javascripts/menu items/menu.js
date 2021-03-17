const showMenuItems = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#modal-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="media">
    <img src="${item.image}" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0">${item.title}</h5>
      <p>${item.description}</p>
      <p>${item.price}</p>
    </div>
    </div>`;
  });
};

export default showMenuItems;
