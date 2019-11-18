function initMap() {
    var location = { lat: 44.804360, lng: 20.474730 };

    var map = new google.maps.Map(document.getElementById("map"), { zoom: 14, center: location });

    var marker = new google.maps.Marker({ position: location, map: map });
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

function validateForm() {

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let desc = document.querySelector("#desc");

    if (!validateInputBox(name.value)) {
        alert("Niste uneli ime!");
        name.focus();
        return false;
    }


    if (!validateEmail(email.value)) {
        alert("Pogresan format e-maila!");
        email.focus();
        return false;
    }

    if (!validateInputBox(subject.value)) {
        alert("Niste uneli naziv teme!");
        subject.focus();
        return false;
    }

    if (!validateInputBox(desc.value)) {
        alert("Niste uneli poruku!");
        desc.focus();
        return false;
    }

    alert("Poruka uspesno poslata:\n Ime: " + name + "\nE-mail: " + email + "\nTema: " + subject + "\nPoruka: " + message);

    return true;
}