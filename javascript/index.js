var navbar = document.querySelector('.navBar');
var sticky = navbar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};