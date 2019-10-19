$(document).ready(function(){
    $('.js-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<svg class="icon arrow-left"><use xlink:href="#arrow-right"></use></svg>',
        nextArrow: '<svg class="icon arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        fade: true,
        infinite: false,
        cssEase: 'linear'
    });
});