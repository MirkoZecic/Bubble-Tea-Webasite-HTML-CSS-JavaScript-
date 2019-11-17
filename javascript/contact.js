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

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let desc = document.querySelector("#desc").value;

    if (!validateInputBox(name)) {
        alert("Niste uneli ime!");

        return false;
    }


    if (!validateEmail(email)) {
        alert("Pogresan format e-maila!");

        return false;
    }

    if (!validateInputBox(subject)) {
        alert("Niste uneli naziv teme!");

        return false;
    }

    if (!validateInputBox(desc)) {
        alert("Niste uneli poruku!");

        return false;
    }

    alert("Poruka uspesno poslata:\n Ime: " + name + "\nE-mail: " + email + "\nTema: " + subject + "\nPoruka: " + message);

    return true;
}