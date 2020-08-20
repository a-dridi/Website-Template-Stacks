function addressMap() {

    var addressLatLng = { lat: 48.210033, lng: 16.363449 };

    var mapProp = {
        center: addressLatLng,
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("addressMapContainer"), mapProp);

    var marker = new google.maps.Marker({ position: addressLatLng, title: 'Our Company HQ' });
    marker.setMap(map);
}