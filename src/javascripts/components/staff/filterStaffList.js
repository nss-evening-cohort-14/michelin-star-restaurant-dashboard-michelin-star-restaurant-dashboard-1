import { getStaff } from '../../helpers/data/staffData';

const filterStaff = () => {
  let domString = `
    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example" id="filter-all-staff">
      <option value="all-staff">All Staff</option>
  `;

  getStaff().then((staffArray) => {
    const staffPositions = [...new Set(staffArray.map(((item) => item.job_title)))];
    staffPositions.forEach((position) => {
      domString += `
        <option value="${position}" id="${position}">${position}</option>
      `;
    });

    domString += `
      </select>
      <button type="button" class="btn btn-secondary m-2" id="filter-staff-submit">Filter Staff</button>
    `;

    document.querySelector('#staff-filter-container').innerHTML = domString;
  });
};

export default filterStaff;
