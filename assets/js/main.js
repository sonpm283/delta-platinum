$(document).ready(function() {
    menuMobile.init()
    mainSlide.init()
   
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
            loop: true,
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
        const menuBtn = $(".menu-btn")
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
