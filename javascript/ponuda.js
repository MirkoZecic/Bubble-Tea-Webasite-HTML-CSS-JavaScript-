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
    document.getElementById('text1').innerHTML = "Ukusi: malina, jagoda, kivi, mango, grožđe, liči, narandža ...";
    document.getElementById('text1').style.color = "rgb(243, 34, 69)";

}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick1').slick('slickPause');
    document.getElementById('text1').innerHTML = "Najčešće se misli na hladne osvežavajuće čajeve sa ukusima voća sa bobama i želeom.";
    document.getElementById('text1').style.color = "black";
});

$('#box2').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('#slick2').slick('slickPlay');
    document.getElementById('text2').innerHTML = "Ukusi: kokos, plazma, kesten, bambus ...";
    document.getElementById('text2').style.color = "rgb(243, 34, 69)";
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick2').slick('slickPause');
    document.getElementById('text2').innerHTML = "Možete se odlučiti i za toplu mlečnu varijantu , savršenu za hladne i zimske dane.";
    document.getElementById('text2').style.color = "black";
});

$('#box3').hover(function () {
    $(this).siblings().addClass('boxFaded');
    $('#slick3').slick('slickPlay');
    document.getElementById('text3').innerHTML = "Slatkiši: mug cake, marshmallow-i, torte, kolači, sladoledi ...";
    document.getElementById('text3').style.color = "rgb(243, 34, 69)";
}, function () {
    $(this).siblings().removeClass('boxFaded');
    $('#slick3').slick('slickPause');
    document.getElementById('text3').innerHTML = "Za neizlečive sladokusce napravili smo neodoljivu ponudu - izmešali smotradiocionalnp sa klasičnim ukusima, omiljeno iz detinstva sa istočnjačkim.";
    document.getElementById('text3').style.color = "black";
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