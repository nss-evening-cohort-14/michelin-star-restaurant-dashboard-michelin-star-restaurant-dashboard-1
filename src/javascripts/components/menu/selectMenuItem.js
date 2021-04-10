import { getMenuItems } from '../../helpers/data/menuData';

const selectMenuItem = (array = []) => {
  $('#filter-container').empty();
  let domString = `<ul>
          <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Select Menu<b class="caret"></b></a>
          <ul class="dropdown-menu" id="reservation-list">`;
  getMenuItems().then((menuArray) => {
    menuArray.map((menu) => {
      if (array.includes(menu.firebaseKey)) {
        domString += `<li>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="${menu.title}" class="menuItem-check" id="menuItemCheckBox${menu.title}" value="${menu.firebaseKey}" checked> ${menu.title}
                        </label>
                      </div>
                    </li>`;
      } else {
        domString += `<li>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="${menu.title}" class="menuItem-check" id="menuItemCheckBox${menu.title}" value="${menu.firebaseKey}"> ${menu.title}
                          </label>
                        </div>
                      </li>`;
      }
      return domString;
    });
    $('#update-menuItem-container').html(domString);
  });
};

export default selectMenuItem;
