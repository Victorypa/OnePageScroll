$(function () {
  $(".card").fadeIn(5000);
  $(".page-scroll-wrapper").onepage_scroll({

    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease-in", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 800, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {
      $(".animation").css({
        transform: "scale(0.7)"
      });
    }, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) {
      $(".animation").css({
        transform: "scale(1)"
      });
    }, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".

  });


  $('body').delegate('.hamburger-button, .opacity', 'click', function () {
    event.preventDefault();
    $('.mobile-menu').toggleClass('show');
    $('.hamburger-button').toggleClass('active');
    $('.opacity').toggleClass('active');
  });

  $('body').delegate('.primary-button--modal, .header-menu__link', 'click', function(){
    $('.mobile-menu').removeClass('show');
    $('.hamburger-button').removeClass('active');
    $('.opacity').removeClass('active');
  })


  $('#lightgallery').lightGallery({
    pager: true
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ["<img src='img/arrows.png'>", "<img src='img/arrows.png'>"],
  });

  $(".gallery").bind("mousewheel", function (e) {
    $(this).scrollTop($(this).scrollTop() - e.originalEvent.wheelDeltaY);
    return false;
  });

});
