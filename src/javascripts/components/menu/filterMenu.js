const filterMenu = () => {
  const domString = `<ul>
    <li class="dropdown">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle">Filter by Ingredients<b class="caret"></b></a>
        <ul class="dropdown-menu" id="filter-ingredients">
            <li>
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="ingredient" class="ingredient-check" id="filterCheckbox" value="ingredient">
                </label>
              </div>
            </li>
        </ul>`;

  document.querySelector('#form-container').innerHTML = domString;
};

export default filterMenu;
