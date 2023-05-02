$(document).ready(function() {
  $('.sidebar').show();
  $('.sidebar2').hide();

  $('.toogleButon').click(function() {
    if ($('.sidebar').is(':visible')) {
      $('.sidebar').hide();
      $('.sidebar2').show();
      $('.main').css('width', '93%');
    } else {
      $('.sidebar').show();
      $('.sidebar2').hide();
      $('.main').css('width', '85%');
    }
  });

  $(window).resize(function() {
    if ($(window).width() <= 768) {
      $('.sidebar').hide();
      $('.sidebar2').show();
      $('.main').css('width', '93%');
    } else {
      $('.sidebar').show();
      $('.sidebar2').hide();
      $('.main').css('width', '85%');
    }
  });
});
