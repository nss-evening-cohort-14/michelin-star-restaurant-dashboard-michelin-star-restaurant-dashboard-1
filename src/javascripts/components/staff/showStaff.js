const showStaff = (staffArray, user) => {
  if (user) {
    document.querySelector('#view').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    document.querySelector('#stage').innerHTML = `
    <button type="button" class="btn btn-info my-2" data-toggle="modal" data-target="#formModal" id="add-staff-member">Add Staff Member</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle my-2" type="button" id="dropdown-staff-btn" data-bs-toggle="dropdown" aria-expanded="false">
        Filter by Position
      </button>
      <ul class="dropdown-menu" id="dropdown-staff-list" aria-labelledby="dropdownMenuButton1">
      </ul>
    </div>
    `;
    document.querySelector('#view').innerHTML = `
    <div class="d-flex flex-wrap justify-content-around align-items-center" id="staff-container"></div>
  `;
    staffArray.forEach((item) => {
      document.querySelector('#staff-container').innerHTML += `
      <div class="card m-3" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.image}">
        <div class="card-body">
          <h3 class="card-title">${item.first_name} ${item.last_name}</h3>
          <h5 class="card-title">${item.job_title}</h5>
          <p class="card-text">${item.bio}</p>
          <div class="staff-member-buttons">
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#formModal" id="update-staff--${item.firebaseKey}">Update</button>
            <button class="btn btn-danger" type="button" id="delete-staff--${item.firebaseKey}">Delete</button>
          </div>
        </div>
      </div>
    `;
    });
  } else {
    document.querySelector('#view').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#view').innerHTML = `
      <div class="d-flex flex-wrap justify-content-around align-items-center" id="staff-container"></div>
    `;
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
