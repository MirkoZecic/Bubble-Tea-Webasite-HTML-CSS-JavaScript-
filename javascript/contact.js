function initMap() {
    var location1 = { lat: 44.804360, lng: 20.474730 };
    var location2 = { lat: 44.815965, lng: 20.455616 };

    var map = new google.maps.Map(document.getElementById("map"), { zoom: 14, center: { lat: (location1.lat + location2.lat) / 2, lng: (location1.lng + location2.lng) / 2 } });

    var marker1 = new google.maps.Marker({ position: location1, map: map });
    var marker2 = new google.maps.Marker({ position: location2, map: map });
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

    alert("Poruka uspesno poslata:\n\nIme: " + name.value + "\nE-mail: " + email.value + "\nTema: " + subject.value + "\nPoruka: " + desc.value);

    return true;
}