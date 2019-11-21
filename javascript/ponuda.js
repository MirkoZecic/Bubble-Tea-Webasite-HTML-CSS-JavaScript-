$(document).ready(function () {
    $('#slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnDotsHover: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        infinite: true
    });

    $('#slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnDotsHover: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        infinite: true
    });

    $('#slick3').slick({
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


$('#box1').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('#slick1').slick('slickPlay');
    document.getElementById('text1').innerHTML = "Ovde stoji text novi kad se predje misem preko prvog diva";
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick1').slick('slickPause');
    document.getElementById('text1').innerHTML = "Ovde stoji text kad se pomeri mis sa diva (prvi)";
});

$('#box2').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('#slick2').slick('slickPlay');
    document.getElementById('text2').innerHTML = "Ovde stoji text novi kad se predje misem preko drugog diva";
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick2').slick('slickPause');
    document.getElementById('text2').innerHTML = "Ovde stoji text kad se pomeri mis sa diva (drugi)";
});

$('#box3').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('#slick3').slick('slickPlay');
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick3').slick('slickPause');
});


var navbar = document.querySelector('.navBar');
var sticky = navbar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};