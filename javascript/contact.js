function initMap() {
    var location = { lat: 44.815844, lng: 20.437061 };

    var map = new google.maps.Map(document.getElementById("map"), { zoom: 14, center: location });

    var marker = new google.maps.Marker({ position: location, map: map });
}