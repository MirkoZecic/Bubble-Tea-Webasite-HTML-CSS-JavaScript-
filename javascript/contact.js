var navbar = document.querySelector('.navBar');
var sticky = navbar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

function initMap() {
    var location1 = { lat: 44.804360, lng: 20.474730 };
    var location2 = { lat: 44.815965, lng: 20.455616 };

    var map = new google.maps.Map(document.getElementById("map"), { zoom: 14, center: { lat: (location1.lat + location2.lat) / 2, lng: (location1.lng + location2.lng) / 2 } });

    var marker1 = new google.maps.Marker({ position: location1, map: map });
    var marker2 = new google.maps.Marker({ position: location2, map: map });
}

function showPhone() {
    document.querySelector("#emailText").style.display = "none";
    document.querySelector("#email").style.display = "none";
    document.querySelector("#phoneText").style.display = "block";
    document.querySelector("#phone").style.display = "block";
}

function showEmail() {
    document.querySelector("#emailText").style.display = "block";
    document.querySelector("#email").style.display = "block";
    document.querySelector("#phoneText").style.display = "none";
    document.querySelector("#phone").style.display = "none";
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputBox(message) {
    if (message === "") {
        return false;
    }

    return true;
}

function validatePhoneNumber(number) {
    var isNum = /^\d+$/.test(number);
    if (number.length < 10)
        return false;
    if (number.length > 10)
        return false;
    if (number.slice(0, 2) !== "06")
        return false;
    return isNum;
}

function validateForm() {

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone")
    let emailRadio = document.querySelector("#e-mailResponse");
    let phoneRadio = document.querySelector("#phoneResponse")
    let msg = document.querySelector("#msg");
    let responseAlert = "email";

    if (!validateInputBox(name.value)) {
        alert("Niste uneli ime!");
        name.focus();
        return false;
    }

    if (emailRadio.checked) {
        if (!validateEmail(email.value)) {
            alert("Pogresan format e-maila!");
            email.focus();
            return false;
        }
    }

    else if (phoneRadio.checked) {
        if (!validatePhoneNumber(phone.value)) {
            alert("Neispravan broj!");
            phone.focus();
            return false;
        }
        responseAlert = "phone";
    }

    else {
        alert("Morate zokruziti kako da vam odgovorimo!");
        return false;
    }


    if (!validateInputBox(msg.value)) {
        alert("Niste uneli poruku!");
        msg.focus();
        return false;
    }

    if (responseAlert == "email")
        alert("Poruka uspesno poslata\n\nIme: " + name.value + "\nE-mail: " + email.value + "\nPoruka:" + msg.value);
    else
        alert("Poruka uspesno poslata\n\nIme: " + name.value + "\nTelefon: " + phone.value + "\nPoruka:" + msg.value);

    return true;
}