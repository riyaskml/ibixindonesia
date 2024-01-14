(function ($) {
  "use strict";

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-top");
      if (windowpos >= 110) {
        siteHeader.addClass("fixed-header");
        scrollLink.addClass("open");
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.removeClass("open");
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".main-header .menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev(".megamenu").slideToggle(900);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  // banner-carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 6000,
      navText: ['<span class="icon-6"></span>', '<span class="icon-7"></span>'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // single-item-carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="icon-11"></span>',
        '<span class="icon-12"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  // two-item-carousel
  if ($(".two-item-carousel").length) {
    $(".two-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fas fa-long-arrow-left"></span>',
        '<span class="fas fa-long-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  // three-item-carousel
  if ($(".three-item-carousel").length) {
    $(".three-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fas fa-long-arrow-left"></span>',
        '<span class="fas fa-long-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // four-item-carousel
  if ($(".four-item-carousel").length) {
    $(".four-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fal fa-angle-left"></span>',
        '<span class="fal fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  // five-item-carousel
  if ($(".five-item-carousel").length) {
    $(".five-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fal fa-angle-left"></span>',
        '<span class="fal fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // category-carousel
  if ($(".category-carousel").length) {
    $(".category-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fal fa-angle-left"></span>',
        '<span class="fal fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // pricing-carousel
  if ($(".pricing-carousel").length) {
    $(".pricing-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 1000,
      navText: [
        '<span class="fal fa-angle-left"></span>',
        '<span class="fal fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }
  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav").onePageNav();
  }

  // Scroll top button
  $(".scroll-top-inner").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  function handleScrollbar() {
    const bHeight = $("body").height();
    const scrolled = $(window).innerHeight() + $(window).scrollTop();

    let percentage = (scrolled / bHeight) * 100;

    if (percentage > 100) percentage = 100;

    $(".scroll-top-inner .bar-inner").css("width", percentage + "%");
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
    handleScrollbar();
    if ($(window).scrollTop() > 200) {
      $(".scroll-top-inner").addClass("visible");
    } else {
      $(".scroll-top-inner").removeClass("visible");
    }
  });
})(window.jQuery);
