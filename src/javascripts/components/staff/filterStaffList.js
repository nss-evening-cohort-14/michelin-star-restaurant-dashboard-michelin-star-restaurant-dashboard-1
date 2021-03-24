import { getStaff } from '../../helpers/data/staffData';

const filterStaff = () => {
  let domString = ` <ul>
                      <li class="dropdown">
                      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Filter Staff<b class="caret"></b></a>
                      <ul class="dropdown-menu" id="staff-list">
                      <li>
                      </li>
                    `;

  getStaff().then((staffArray) => {
    staffArray.forEach((item) => {
      console.warn(item.job_title);
      domString += `
        <li>
          <div class="checkbox">
            <label>
              <input type="checkbox" name="${item.job_title}" class="position-check" id="positionCheckbox${item.job_title}" value="${item.job_title}"> ${item.job_title}
            </label>
          </div>
        </li>
      `;
    });
  });
  domString += '</ul> </li> </ul>';
  document.querySelector('#form-container').innerHTML = domString;
};

export default filterStaff;
