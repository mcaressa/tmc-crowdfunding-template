/*
  Modal sample window for home page
*/
$(document).ready(function() {
  function hideModal(modalwindow){
    $(modalwindow).modal('hide');
  }

  $('#okwin01').on('click', function(e){
    e.preventDefault();
    hideModal('#modalsamplestory');
  });
});
