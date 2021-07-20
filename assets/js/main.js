$(document).ready(function() {
    menuMobile.init()
    mainSlide.init()
    slideDownMenu.init()
    advanceFilter.init()
    productSlide.init()
    projectRent.init()
    tabProduct.init()
    productMenu.init()
});

// Main slide
const navText = ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>" ];
const mainSlide = {
    init : function () {
        this.mainSlide();
    },
    mainSlide: function() {
        $("#home-slide").owlCarousel({
            items: 1,
            dots: false,
            loop: false,
            nav: false,
            autoplay: false,
        })
    }
}

// Menu mobile 
const menuMobile = {
    init: function() {
        this.menuMobile()
    },
    menuMobile: function() {
        const menuBtn = $(".js-menu-btn")
        const menuMobile = $(".menumobile")
        const menuOverlay = $(".menumobile-overlay")

        menuBtn.click(function() {
            menuMobile.addClass("active")
        })

        menuOverlay.click(function() {
            menuMobile.removeClass("active")
        })
    }
}


// Menu slidedown
const slideDownMenu = {
    init: function () {
        this.subMenuChild();
    },
    subMenuChild: function () {
        $(".js-slide-down-menu").click(function (event) {
            const target = $(this).parent().next(".submenu-mb");
            const item = $(this).parent().parent(".menumobile-item");
            if($(this).hasClass('fa fa-angle-down')) {
                $(this).removeClass('fa fa-angle-down')
                $(this).addClass('fa fa-angle-up')
            } else if ($(this).hasClass('fa fa-angle-up')) {
                $(this).removeClass('fa fa-angle-up')
                $(this).addClass('fa fa-angle-down')
            }
            $(item).toggleClass("active")
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
    init : function () {
        this.productSlide();
    },
    productSlide: function() {
        $(".product-slide").owlCarousel({
            items: 3,
            dots: true,
            loop: false,
            nav: false,
            autoplay: false,
            margin: 20,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,  
                },
                1000:{
                    items:3,
                }
            }
        })
    }
}


const projectRent = {
    init : function () {
        this.projectRent();
    },
    projectRent: function() {
        $("#project-rent-slide").owlCarousel({
            items: 3,
            dots: false,
            loop: false,
            nav: true,
            autoplay: false,
            margin: 20,
            navText: navText,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,  
                },
                1000:{
                    items:3,
                }
            }
        })
    }
}


// tab product
const tabProduct = {
    init: function() {
        this.tabProduct()
    },
    tabProduct: function() {
        const tabs = $(".product-category li .tab");
        const tabsMb = $(".product-category-mb li .tab");
        const panes =  $(".pane")
        tabs.click(function(event) {
            tabs.removeClass("active")
            $(this).addClass("active")
            panes.hide()
            const pane = $(this).attr("data-pane")
            $(pane).fadeIn()
            event.preventDefault()
        })

        tabsMb.click(function(event) {
            tabsMb.removeClass("active")
            $(this).addClass("active")
            panes.hide()
            const pane = $(this).attr("data-pane")
            $(pane).fadeIn()
            $(".product-category-mb").removeClass("active")
            event.preventDefault()
        })
        
        $(".product-category li:first .tab").click();
        $(".product-category-mb li:first .tab").click();
    }
}

// menu mb product
const productMenu = {
    init: function() {
        this.productMenu()
    },
    productMenu: function() {
        const productMenuBtn = $(".js-product-menu")
        productMenuBtn.click(function() {
            $(".product-category-mb").toggleClass("active")
        })
    }
}
