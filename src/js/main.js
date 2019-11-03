$(document).ready(function(){
    $('.js-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<svg class="icon arrows arrow-left"><use xlink:href="#arrow-right"></use></svg>',
        nextArrow: '<svg class="icon arrows arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        fade: true,
        infinite: false,
        cssEase: 'linear',
        'rows': 0
    });

    $('.js-works-slider').slick({
        prevArrow: '<svg class="icon arrows arrow-left"><use xlink:href="#arrow-right"></use></svg>',
        nextArrow: '<svg class="icon arrows arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true
    });

    mobileMenu();
});



function mobileMenu() {
    $('body').on('click', '.js-mob-menu-button', function(){
        var $this = $(this),
            menu = $('.js-mob-menu');

        if (menu.hasClass('open-menu')) {
            menu.removeClass('open-menu');
        } else {
            menu.addClass('open-menu');
        }
        return false;
    });

    $('body').on('click', function(e) {
        if (!$(e.target).closest(".menu-block").length) {
            $('.js-mob-menu').removeClass("open-menu");
        } else {
            return;
        }
    });
}