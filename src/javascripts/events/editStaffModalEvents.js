const toggleDisable = () => {
  $('.modal-dialog').on('click', (e) => {
    console.warn(e);
    if (e.target.classList.includes('toggle-disable')) {
      console.warn(e);
    }
    $('.edit-staff-btn').removeAttr('disabled');
  });
};

export default toggleDisable;
