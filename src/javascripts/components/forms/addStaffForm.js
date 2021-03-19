const addStaffForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="add-staff-form" class="mb-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">First Name</label>
        <input type="text" class="form-control" id="new-first-name" placeholder="First Name">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="new-last-name" placeholder="Last Name">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Position</label>
        <input type="text" class="form-control"  id="new-position" placeholder="Position">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Image</label>
        <input type="url" class="form-control" id="new-image-url" placeholder="URL">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
        <textarea class="form-control" id="new-staff-bio" rows="3"></textarea>
      </div>
      <button type="submit" id="submit-staff" class="btn btn-primary">Add Staff</button>
    </form>
  `;
};

export default addStaffForm;
