import filterStaff from './filterStaffList';

const showStaff = (staffArray, user) => {
  if (user) {
    document.querySelector('#view').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#filter-container').innerHTML = '';
    document.querySelector('#masthead').innerHTML = '';
    document.querySelector('#form-container').innerHTML = `
      <div class="d-flex flex-wrap justify-content-center align-content-around flex-column" id="staff-filter-container"></div> 
    `;
    document.querySelector('#stage').innerHTML = `
      <button type="button" class="btn btn-dark my-2" data-toggle="modal" data-target="#formModal" id="add-staff-member">Add Staff Member</button>
      `;
    document.querySelector('#view').innerHTML = `
    <div class="d-flex flex-wrap justify-content-around align-items-center" id="staff-container"></div>
      `;

    filterStaff();

    staffArray.forEach((item) => {
      document.querySelector('#staff-container').innerHTML += `
      <div class="card m-3" style="height: 30rem; width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.image}" id="staff-btn--${item.firebaseKey}">
        <div class="card-body">
          <h3 class="card-title">${item.first_name} ${item.last_name}</h3>
          <h5 class="card-title">${item.job_title}</h5>
          <p class="card-text">${item.bio}</p>
          <div class="staff-member-buttons">
            <button class="btn btn-secondary" type="button" data-toggle="modal" data-target="#formModal" id="update-staff--${item.firebaseKey}">Update</button>
            <button class="btn btn-danger" type="button" id="delete-staff--${item.firebaseKey}">Delete</button>
          </div>
        </div>
      </div>
    `;
    });
  } else {
    document.querySelector('#view').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#filter-container').innerHTML = '';
    document.querySelector('#stage').innerHTML = '';
    document.querySelector('#masthead').innerHTML = '';
    document.querySelector('#form-container').innerHTML = `
      <div class="d-flex flex-wrap justify-content-center align-content-around flex-column" id="staff-filter-container"></div> 
    `;
    document.querySelector('#view').innerHTML = `
      <div class="d-flex flex-wrap justify-content-around align-items-center" id="staff-container"></div>
    `;
    filterStaff();
    staffArray.forEach((item) => {
      document.querySelector('#staff-container ').innerHTML += `
      <div class="card m-3" style="height: 30rem; width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.image}">
        <div class="card-body">
          <h3 class="card-title">${item.first_name} ${item.last_name}</h3>
          <h5 class="card-title">${item.job_title}</h5>
          <p class="card-text">${item.bio}</p>
        </div>
      </div>
    `;
    });
  }
};

export default showStaff;
