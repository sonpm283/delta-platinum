$(document).ready(function () {
  menuMobile.init();
  mainSlide.init();
  slideDownMenu.init();
  advanceFilter.init();
  productSlide.init();
  projectRent.init();
  tabProduct.init();
  productMenu.init();
  projectSale.init();
  newsSlide.init();
  backTop.init();
});

// Main slide
const navText = [
  "<i class='fa fa-angle-left'></i>",
  "<i class='fa fa-angle-right'></i>",
];
const mainSlide = {
  init: function () {
    this.mainSlide();
  },
  mainSlide: function () {
    $("#home-slide").owlCarousel({
      items: 1,
      dots: false,
      loop: false,
      nav: false,
      autoplay: false,
    });
  },
};

// Menu mobile
const menuMobile = {
  init: function () {
    this.menuMobile();
  },
  menuMobile: function () {
    const menuBtn = $(".js-menu-btn");
    const menuMobile = $(".menumobile");
    const menuOverlay = $(".menumobile-overlay");

    menuBtn.click(function () {
      menuMobile.addClass("active");
    });

    menuOverlay.click(function () {
      menuMobile.removeClass("active");
    });
  },
};

// Menu slidedown
const slideDownMenu = {
  init: function () {
    this.subMenuChild();
  },
  subMenuChild: function () {
    $(".js-slide-down-menu").click(function (event) {
      const target = $(this).parent().next(".submenu-mb");
      const item = $(this).parent().parent(".menumobile-item");
      if ($(this).hasClass("fa fa-angle-down")) {
        $(this).removeClass("fa fa-angle-down");
        $(this).addClass("fa fa-angle-up");
      } else if ($(this).hasClass("fa fa-angle-up")) {
        $(this).removeClass("fa fa-angle-up");
        $(this).addClass("fa fa-angle-down");
      }
      $(item).toggleClass("active");
      $(target).slideToggle(300);
      event.preventDefault();
    });
  },
};

// filter
const advanceFilter = {
  init: function () {
    this.advanceFilter();
  },
  advanceFilter: function () {
    $(".js-search-action").click(function (event) {
      const target = $(this).parent().parent().parent().next(".advance");
      $(target).slideToggle(300);
      event.preventDefault();
    });
  },
};

// product slide
const productSlide = {
  init: function () {
    this.productSlide();
  },
  productSlide: function () {
    $(".product-slide").owlCarousel({
      items: 3,
      dots: true,
      loop: false,
      nav: false,
      autoplay: false,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  },
};

const projectRent = {
  init: function () {
    this.projectRent();
  },
  projectRent: function () {
    $(".project-rent-slide").owlCarousel({
      items: 3,
      dots: false,
      loop: false,
      nav: true,
      autoplay: false,
      margin: 20,
      navText: navText,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  },
};

const projectSale = {
  init: function () {
    this.projectSale();
  },
  projectSale: function () {
    $("#project-for-sale").owlCarousel({
      items: 3,
      dots: false,
      loop: false,
      nav: true,
      autoplay: false,
      margin: 20,
      navText: navText,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  },
};

// tab product
const tabProduct = {
  init: function () {
    this.tabProduct();
  },
  tabProduct: function () {
    const tabs = $(".product-category li .tab");
    const tabsMb = $(".product-category-mb li .tab");
    const panes = $(".pane");
    tabs.click(function (event) {
      tabs.removeClass("active");
      $(this).addClass("active");
      panes.hide();
      const pane = $(this).attr("data-pane");
      $(pane).fadeIn();
      event.preventDefault();
    });

    tabsMb.click(function (event) {
      tabsMb.removeClass("active");
      $(this).addClass("active");
      panes.hide();
      const pane = $(this).attr("data-pane");
      $(pane).fadeIn();
      $(".product-category-mb").removeClass("active");
      event.preventDefault();
    });

    $(".product-category li:first .tab").click();
    $(".product-category-mb li:first .tab").click();
  },
};

// menu mb product
const productMenu = {
  init: function () {
    this.productMenu();
  },
  productMenu: function () {
    const productMenuBtn = $(".js-product-menu");
    productMenuBtn.click(function () {
      $(".product-category-mb").toggleClass("active");
    });
  },
};

const newsSlide = {
  init: function () {
    this.newsSlide();
  },
  newsSlide: function () {
    $("#news-slide").owlCarousel({
      items: 3,
      dots: false,
      loop: false,
      nav: true,
      autoplay: false,
      margin: 30,
      navText: navText,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  },
};

var bigimage = $("#big");
var thumbs = $("#thumbs");
var syncedSecondary = true;

bigimage
  .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: navText,
  })
  .on("changed.owl.carousel", syncPosition);

thumbs
  .on("initialized.owl.carousel", function () {
    thumbs.find(".owl-item").eq(0).addClass("current");
  })
  .owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    navText: navText,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100,
    responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
  })
  .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
  var count = el.item.count - 1;
  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

  if (current < 0) {
    current = count;
  }
  if (current > count) {
    current = 0;
  }
  //to this
  thumbs
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");
  var onscreen = thumbs.find(".owl-item.active").length - 1;
  var start = thumbs.find(".owl-item.active").first().index();
  var end = thumbs.find(".owl-item.active").last().index();

  if (current > end) {
    thumbs.data("owl.carousel").to(current, 100, true);
  }
  if (current < start) {
    thumbs.data("owl.carousel").to(current - onscreen, 100, true);
  }
}

function syncPosition2(el) {
  if (syncedSecondary) {
    var number = el.item.index;
    bigimage.data("owl.carousel").to(number, 100, true);
  }
}

thumbs.on("click", ".owl-item", function (e) {
  e.preventDefault();
  var number = $(this).index();
  bigimage.data("owl.carousel").to(number, 300, true);
});


const backTop = {
    init: function() {
        this.backTop()
    },
    backTop: function() {
        $(window).scroll(function() {
            if($(window).scrollTop() > 150) {
                $('.back-top').addClass('active')
            }else {
                $('.back-top').removeClass('active')
            }
          });
    }
}

$('#example-2').elevateZoom({
    zoomType : "inner",
    cursor: "crosshair"
});