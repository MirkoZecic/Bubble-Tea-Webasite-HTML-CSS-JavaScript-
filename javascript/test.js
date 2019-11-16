$(document).ready(function () {
    $('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnDotsHover: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        infinite: true
    });
});


$('.box').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('.slick1').slick('slickPlay');
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('.slick1').slick('slickPause');
});
