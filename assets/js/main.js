$(document).ready(function() {
    menuMobile.init()
    mainSlide.init()
    slideDownMenu.init()
});

// main slide
const navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
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

// menu mobile 
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