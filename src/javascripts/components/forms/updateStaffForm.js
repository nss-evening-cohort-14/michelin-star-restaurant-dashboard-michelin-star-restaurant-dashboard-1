import { getSingleStaffReservation } from '../../helpers/data/staffReservationData';
import selectReservation from '../staff/selectReservations';

const updateStaffForm = (staffObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form class="mb-4">
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
        <label for="update-bio" class="form-label">Bio</label>
        <input type="text" class="form-control" id="update-bio" placeholder="Bio" value="${staffObject.bio}">
      </div>
      <div class="mb-3" id="reservation-dropdown-container"></div>
      <button type="submit" id="edit-this-staff--${staffObject.firebaseKey}" class="btn btn-primary">Update Staff</button>
    </form>
  `;
  getSingleStaffReservation(staffObject.firebaseKey).then((response) => {
    const reservationArray = Object.values(response).map((element) => element.reservation_id);
    selectReservation(reservationArray);
  });
};

export default updateStaffForm;
