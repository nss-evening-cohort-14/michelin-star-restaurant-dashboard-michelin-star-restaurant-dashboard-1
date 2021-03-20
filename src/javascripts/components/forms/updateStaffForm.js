const updateStaffForm = (staffObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="update-staff-form" class="mb-4">
      <div class="mb-3">
        <label for="update-first-name" class="form-label">First Name</label>
        <input type="text" class="form-control" id="update-first-name" placeholder="First Name" value="${staffObject.first_name}">
      </div>
      <div class="mb-3">
        <label for="update-last-name" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="update-last-name" placeholder="Last Name" value="${staffObject.last_name}">
      </div>
      <div class="mb-3">
        <label for="update-position" class="form-label">Position</label>
        <input type="text" class="form-control"  id="update-position" placeholder="Position" value="${staffObject.job_title}">
      </div>
      <div class="mb-3">
        <label for="update-image-url" class="form-label">Image</label>
        <input type="url" class="form-control" id="update-image-url" placeholder="URL" value="${staffObject.image}">
      </div>
      <div class="mb-3">
        <label for="update-staff-bio" class="form-label">Bio</label>
        <textarea class="form-control" id="update-staff-bio" rows="3" value="${staffObject.bio}"></textarea>
      </div>
      <button type="submit" id="submit-update-staff--${staffObject.firebaseKey}" class="btn btn-primary">Update Staff</button>
    </form>
  `;
};

export default updateStaffForm;
