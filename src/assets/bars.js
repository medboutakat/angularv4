$(document).ready(function () {

  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  });


  $('#sidebarCollapse,#sidebarCollapse1').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').fadeIn();
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');

  });
  // Calculating the distance from the top of the page to the initial position of the navbar, and store it in a variable
  var nav = $('.navbar');
  if (nav.length) {
    var navbarOffest = nav.offset().top;

    $(window).on('scroll', function () {

      var navbarHeight = $('.navbar').outerHeight();

      if ( $(window).scrollTop() >= navbarOffest ) {
        $('.navbar').addClass('navbar-fixed-top');
        $('body').css('padding-top', navbarHeight + 'px');
      } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('body').css('padding-top', '0');
      }
    });
  }

});
