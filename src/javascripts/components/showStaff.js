const showStaff = (staffArray, user) => {
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#stage').innerHTML = '';
  document.querySelector('#view').innerHTML = `
    <div class="d-flex flex-wrap justify-content-around align-items-center" id="staff-container"></div>
  `;

  if (user) {
    staffArray.forEach((item) => {
      document.querySelector('#staff-container').innerHTML += `
      <div class="card m-3" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.image}">
        <div class="card-body">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <h4 class="card-title">${item.job_title}</h4>
          <p class="card-text">${item.bio}</p>
          <div class="staff-member-buttons">
            <button class="btn btn-primary" type="button" id="edit-staff--${item.firebaseKey}">Update</button>
            <button class="btn btn-danger" type="button" id="delete-staff--${item.firebaseKey}">Delete</button>
          </div>
        </div>
      </div>
    `;
    });
  } else {
    staffArray.forEach((item) => {
      document.querySelector('#staff-container ').innerHTML += `
      <div class="card m-3" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.image}">
        <div class="card-body">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <h4 class="card-title">${item.job_title}</h4>
          <p class="card-text">${item.bio}</p>
        </div>
      </div>
    `;
    });
  }
};

export default showStaff;
