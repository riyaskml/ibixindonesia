(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(1000).fadeOut(500);
    }
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }

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

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(100);
        $(target).addClass("active-tab");
      }
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

  // instagram-carousel
  if ($(".instagram-carousel").length) {
    $(".instagram-carousel").owlCarousel({
      loop: true,
      margin: 15,
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

  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav").onePageNav();
  }

  //nice select
  $(document).ready(function () {
    $("select:not(.ignore)").niceSelect();
  });

  //Sortable Masonary with Filters
  function enableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");

      $container.isotope({
        filter: "*",
        masonry: {
          columnWidth: ".masonry-item.small-column",
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });

      // Isotope Filter
      $filter.find("li").on("click", function () {
        var selector = $(this).attr("data-filter");

        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
        } catch (err) {}
        return false;
      });

      winDow.on("resize", function () {
        var selector = $filter.find("li.active").attr("data-filter");

        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });

      var filterItemA = $(".filter-btns li");

      filterItemA.on("click", function () {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }

  enableMasonry();

  // Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      { accY: -50 }
    );
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

  // page direction
  function directionswitch() {
    if ($(".page_direction").length) {
      $(".direction_switch button").on("click", function () {
        $(".boxed_wrapper").toggleClass(function () {
          return $(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl";
        });
      });
    }
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

  // Date picker
  function datepicker() {
    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }
  }

  if ($(".curved-circle").length) {
    $(".curved-circle").circleType({
      position: "absolute",
      dir: 1,
      radius: 90,
      forceHeight: true,
      forceWidth: true,
    });
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
      $("#search-popup").addClass("popup-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $("#search-popup").removeClass("popup-visible");
      }
    });
    //Hide Popup
    $(".close-search,.search-popup .overlay-layer").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  //Price Range Slider
  if ($(".price-range-slider").length) {
    $(".price-range-slider").slider({
      range: true,
      min: 10,
      max: 99,
      values: [10, 60],
      slide: function (event, ui) {
        $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
      },
    });

    $("input.property-amount").val(
      $(".price-range-slider").slider("values", 0) +
        " - $" +
        $(".price-range-slider").slider("values", 1)
    );
  }

  $(".cal-month-bar").on("click", ".cal-month-prev", function () {
    var cur_block = $(this).parents().eq(1);
    if ($(cur_block).prev(".cal-month-block").length) {
      $(cur_block).removeClass("cal-month-active");
      $(cur_block).prev(".cal-month-block").addClass("cal-month-active");
    }
  });
  $(".cal-month-bar").on("click", ".cal-month-next", function () {
    var cur_block = $(this).parents().eq(1);
    if ($(cur_block).next(".cal-month-block").length) {
      $(cur_block).removeClass("cal-month-active");
      $(cur_block).next(".cal-month-block").addClass("cal-month-active");
    }
  });
  function av_cal_set_month(Y, m) {
    var mm = m + 1;
    mm = mm < 10 ? "0" + mm : mm;
    $(".cal-month-block.cal-month-active").removeClass("cal-month-active");
    $('.cal-month-block[data-yearmonth="' + Y + "-" + mm + '"]').addClass(
      "cal-month-active"
    );
  }

  /*	=========================================================================
	When document is on ready, do
	========================================================================== */

  jQuery(document).on("ready", function () {
    (function ($) {
      // add your functions
      directionswitch();
      datepicker();
    })(jQuery);
  });

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

  /* ==========================================================================
   When document is loaded, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    enableMasonry();
  });
})(window.jQuery);