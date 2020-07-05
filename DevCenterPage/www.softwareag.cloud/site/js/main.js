var $toggleNav = $(".navbar-toggle"),
  $win = $(window)

//==========================================
// TABS NAVIGATION USING ANCHORS
//==========================================
function tabNav() {
  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    window.location.hash = "#!" + $(e.target).attr("href").substr(1)
    AOS.refresh()
    $("html, body").animate({scrollTop: 0}, 800, "swing")
  })
  var $hash = location.hash

  if (!$hash || $hash.substr(1) == "/") {
    $(".nav-pills .nav-item:first-child > a").trigger("click")
  } else {
    $('.nav-item > a[href="#' + $hash.substr(2) + '"]').trigger("click")
  }
}

//==========================================
// RESOURCES MENU SCROLL ANCHORS
//==========================================
function resourcesNav() {
  if ($("#resources-menu").length) {
    $("#resources-menu a").click(function (e) {
      e.preventDefault()
      var elem = $($(this).attr("href"))
      var $top = $(elem).offset().top
      $("html, body").animate({scrollTop: $top}, 800, "swing")
    })
  }
}

// HELPER FOR SLIDER CHANGE EVENT
function testimonialSlideChange(args) {
  /* indicator */
  $(args.sliderObject)
    .closest(".testimonials-slider-container")
    .find(".selected")
    .removeClass("selected")
  $(args.sliderObject)
    .closest(".testimonials-slider-container")
    .find(".slider-buttons div:eq(" + (args.currentSlideNumber - 1) + ")")
    .addClass("selected")
}

var main = (function ($) {
  function initializer() {
    //==========================================
    // MAIN NAVIGATION HEADROOM
    //==========================================
    var elem = document.getElementById("main-nav")
    var headroom = new Headroom(elem, {
      offset: 0,
      tolerance: 5,
    })
    headroom.init()

    //==========================================
    // ADD AOS ON LARGE SCREENS
    //==========================================
    if ($win.width() > 1024) {
      setTimeout(function () {
        AOS.init({
          duration: 1200,
        })
      }, 300)
    } else {
      setTimeout(function () {
        $("[data-aos]").removeAttr("data-aos")
      }, 500)
    }

    //==========================================
    // SMOOTH SCROLL ON BUTTONS
    //==========================================
    $('[data-pscroll="scroll"]').click(function (e) {
      e.preventDefault()
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 60,
        },
        800,
        "swing"
      )
    })

    //==========================================
    // HEADROOM ON PRODUCTS PAGES MENU
    //==========================================
    var productselem = document.getElementById("products-menu")
    if (productselem) {
      var productheadroom = new Headroom(productselem, {
        offset: 0,
        tolerance: 5,
      })
      productheadroom.init()
    }

    //==========================================
    // BUILD RESOURCES PAGE MENU
    //==========================================
    resourcesNav()

    //==========================================
    // HEADROOM ON RESOURCES PAGE MENU
    //==========================================
    var resourcesselem = document.getElementById("resources-menu")
    if (resourcesselem) {
      var productheadroom = new Headroom(resourcesselem, {
        offset: 0,
        tolerance: 5,
      })
      productheadroom.init()
    }

    //==========================================
    // RESPONSIVE TOGGLE MENU
    //==========================================
    $toggleNav.on("click", function () {
      var $this = $(this)
      $this.toggleClass(" is-active ")
      $this.attr("aria-expanded") == "false"
        ? $this.attr("aria-expanded", "true")
        : $this.attr("aria-expanded", "false")
      $this.next(".navbar-collapse").toggleClass(" open ")
      $(elem).toggleClass("open")
    })

    $(".nav-cover").click(function () {
      $toggleNav
        .removeClass("is-active")
        .attr("aria-expanded", "false")
        .next(".navbar-collapse")
        .removeClass(" open ")
      $(elem).removeClass("open")
    })

    //==========================================
    // CREATE TABS AND APPLY HEADROOM
    //==========================================
    if ($(".nav-pills").length) {
      tabNav()
    }
    var tabselem = document.getElementById("tabs-menu")
    if (tabselem) {
      var $oftop = $(tabselem).offset().top - 112
      var tabsheadroom = new Headroom(tabselem, {
        offset: $oftop,
        tolerance: 5,
      })
      tabsheadroom.init()
    }

    //==========================================
    // PRICING PAGE TABLE HEADERS HEADROOM
    //==========================================
    var priceelem = document.getElementById("pricing-header")
    if (priceelem) {
      var $oftop = $(priceelem).offset().top - 112
      var priceheadroom = new Headroom(priceelem, {
        offset: $oftop,
        tolerance: 5,
      })
      priceheadroom.init()
    }

    var priceelem2 = document.getElementById("pricing-header-2")
    if (priceelem2) {
      var $oftop = $(priceelem2).offset().top - 112
      var priceheadroom2 = new Headroom(priceelem2, {
        offset: $oftop,
        tolerance: 5,
      })
      priceheadroom2.init()
    }

    //==========================================
    // ADJUST TWEETER FEED HEIGHT
    //==========================================
    var $twitterfeed = $(".product-news + aside")
    if ($twitterfeed.length) {
      setTimeout(function () {
        $twitterfeed
          .find("iframe")
          .css("height", $(".product-news").height() - 290)
      }, 1500)
    }

    //==========================================
    // FILTER COUNTRY IN TERMS PAGE
    //==========================================
    if ($("#country-filter").length > 0) {
      var $titles = $("#country-filter")
        .closest(".card")
        .find(".list-group-scrollable .list-group-item")
      $("#country-filter").on("keyup", function (k) {
        var $str = $(this).val().toLowerCase()
        $str.length ? $titles.hide() : $titles.show()
        $titles.each(function () {
          var $this = $(this)
          if ($this.data("title").toLowerCase().indexOf($str) > -1) {
            $this.show()
          } else {
            $this.hide()
          }
        })
      })
    }

    //==========================================
    // BUILD RESOURCES PAGE MENU
    //==========================================
    if ($("#resources-menu")) {
      $("#resources-menu li").each(function () {
        if (
          $(this).data("target") != "fact-sheets" &&
          $("#" + $(this).data("target")).find(".fit-v").length < 1
        ) {
          $(this).hide()
        }
      })
    }

    //==========================================
    // TESTIMONIALS SLIDER
    //==========================================
    if ($(".testimonials_slider")) {
      var $h = 0
      // add dots below slider
      $(".testimonials_slider .slide > .container").each(function () {
        $(".slider-buttons").append("<div></div>")
      })
      $(".slider-buttons").hide()

      $(window)
        .on("resize", function () {
          $(".testimonials_slider .slide > .container").each(function () {
            $h = $(this).height() > $h ? $(this).height() : $h
          })
          $(".testimonials_slider").css("min-height", $h)
        })
        .trigger("resize")

      if ($(".slider-buttons > div").length > 1) {
        $(".slider-buttons").show()

        $(".testimonials_slider").iosSlider({
          snapToChildren: true,
          desktopClickDrag: true,
          keyboardControls: true,
          navSlideSelector: $(" .slider-buttons > div"),
          onSlideChange: testimonialSlideChange,
          onSliderLoaded: testimonialSlideChange,
          // navNextSelector: $('.testimonialslider .next'),
          // navPrevSelector: $('.testimonialslider .prev'),
          infiniteSlider: true,
          autoSlide: false,
        })
      }

      setTimeout(function () {
        $(window).trigger("resize")
      }, 1000)
    }

    // LANDING PAGE

    // card-list
    if ($(".landing-page-card-list").length) {
      var $cards = $(".landing-page-card-list").find(".container > ul > li")
      $cards.each(function ($i) {
        var $this = $(this),
          $content = $this.html()
        $this.html(
          '<div class="card shadow-1 fit-v" data-aos="flip-up" data-aos-delay="' +
            $i * 150 +
            '">' +
            $content +
            "</div>"
        )
      })
    }

    if ($(".landing-page .even-odd-list").length) {
      function isOdd(num) {
        return num % 2
      }
      var $list = $(".even-odd-list > .container .highlights >ul>li")
      var $container = $(".even-odd-list > .container .highlights >ul")
      var $newlist = ""
      $counter = 0
      $list.each(function ($i) {
        $this = $(this)
        if (!isOdd($i)) {
          $newlist += '<div class="row">'
        }
        if ($this.find("img").length) {
          $counter++
          $newlist +=
            '<div class="col-lg-7 col-xl-7 ' +
            (isOdd($counter) ? "order-lg-1" : "order-lg-2") +
            '" data-aos="' +
            (isOdd($counter) ? "fade-right" : "fade-left") +
            '">' +
            $this.html() +
            "</div>"
        } else {
          $newlist +=
            '<div class="col-lg-5 col-xl-4 ' +
            (isOdd($counter) ? "order-lg-2" : "order-lg-1") +
            '" data-aos="' +
            (isOdd($counter) ? "fade-left" : "fade-right") +
            '">' +
            $this.html() +
            "</div>"
        }
        if (isOdd($i)) {
          $newlist +=
            '<div class="col-md-12 order-12"><div class="separator"></div></div></div>'
        }
      })
      $(".even-odd-list > .container .highlights").append($newlist)
      $container.remove()
    }

 //   crossbrowswer fix for scroll-behavior: smooth;
    $(document).ready(function () {
      $(".lp-scroll").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault()
          var hash = this.hash
          $("html, body").animate(
            {scrollTop: $(hash).offset().top},
            800,
            function () {
              window.location.hash = hash
            }
          )
        }
      })
    })
  }
  return {
    init: initializer,
  }
})(jQuery)

main.init()
