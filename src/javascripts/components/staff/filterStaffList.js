import { getStaff } from '../../helpers/data/staffData';

const filterStaff = () => {
  let domString = `
    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="filter-all-staff">
      <option selected>Filter by Position</option>
  `;

  getStaff().then((staffArray) => {
    const staffPositions = [...new Set(staffArray.map(((item) => item.job_title)))];
    staffPositions.forEach((position) => {
      domString += `
        <option value="${position}" id="${position}">${position}</option>
      `;
    });

    domString += '</select>';

    document.querySelector('#form-container').innerHTML = domString;
  });
};

export default filterStaff;
