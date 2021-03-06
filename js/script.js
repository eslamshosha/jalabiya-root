
$(window).load(function () {
  $(".preloader").fadeOut();
  // $("body").removeClass("overflow");
});

$(document).ready(function () {
  new WOW().init();
  if ($(window).width() >= 991) {
    $(".menu-btn").hover(
      function () {
        $(".overlay-box").fadeIn(300);
      },
      function () {
        $(".overlay-box").fadeOut(300);
      }
    );
  }
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $(".fixed-search .open-search").toggleClass("close-search");
    $("body").toggleClass("overflow");
  });

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      // $(".overlay-box").fadeToggle(300);
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box").click(function () {
      // $(".overlay-box").fadeOut(300);
      $(".navgition").removeClass("reset-left");
      // $(".menu-bars .bars").toggleClass("open-bars");
      // $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
    //dropdown inside menu
    $(".lang-word, .chevron-down").click(function (e) {
      e.preventDefault();
      var item = $(this).siblings(".dropdown-content");
      item.slideToggle(400);
    });
  }
  //fixed nav
  $stickyNav = $("header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav");
      if ($(window).width() <= 991) {
        if (document.dir == "rtl") {
          $(".search-input").attr("placeholder", "ابحث");
        } else {
          $(".search-input").attr("placeholder", "search");
        }
      }
    } else {
      $stickyNav.removeClass("fixed-nav");
      if ($(window).width() <= 991) {
        if (document.dir == "rtl") {
          $(".search-input").attr(
            "placeholder",
            "ابحث باسم المنتجااو التصنيف"
          );
        } else {
          $(".search-input").attr(
            "placeholder",
            "Search by product name or category"
          );
        }
      }
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav");
      if ($(window).width() <= 991) {
        if (document.dir == "rtl") {
          $(".search-input").attr(
            "placeholder",
            "ابحث باسم المنتج او التصنيف "
          );
        } else {
          $(".search-input").attr(
            "placeholder",
            "Search by product name or category"
          );
        }
      }
    }
  });
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyNav.addClass("fixed-header");
    } else {
      $stickyNav.removeClass("fixed-header");
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-header");
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  ///////// ** product slider** /////////
  var specialsO = new Swiper(".product-one .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-one .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-one .swiper-btn-next",
      prevEl: ".product-one .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** product slider** /////////
  var specials1 = new Swiper(".product-two .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-two .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-two .swiper-btn-next",
      prevEl: ".product-two .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ///////// ** product slider** /////////
  var specials2 = new Swiper(".product-three .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-three .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-three .swiper-btn-next",
      prevEl: ".product-three .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  ////////////////add swiper carsoul to class category////////////////////////////////
  if ($(window).width() < 991) {
    $(".category-section .swiper-containeres").addClass("swiper-container");
    $(".category-section .category-cont").addClass("swiper-wrapper");
    $(".category-section .swiper-slidees").addClass("swiper-slide");
    var category = new Swiper(".category-section .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".category-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  ////////////////add swiper carsoul to class feature////////////////////////////////

  if ($(window).width() < 1199) {
    $(".features .col-md-3.col-xs-12").contents().unwrap();
    $(".features .row").contents().unwrap();
    $(".feature-section .features").addClass("swiper-container");
    $(".feature-section .features-div").addClass("swiper-wrapper");
    $(".feature-section .features-box").addClass("swiper-slide");
    var feature = new Swiper(".feature-section .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".feature-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
});
