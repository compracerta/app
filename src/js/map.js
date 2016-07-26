function initialize() {
    if (!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            
            var geocoder;
            var map;
            var marker;
            
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content: '<h1>Local: </h1>'
            });

            var options = {
                zoom: 5,
                center: geolocate,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("mapa"), options);

            geocoder = new google.maps.Geocoder();

            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                icon: {
                    url: 'http://maps.google.com/mapfiles/ms/micons/green.png',
                    size: new google.maps.Size(30, 30)
                }
            });

            marker.setPosition(geolocate);
            map.setCenter(geolocate);

        });
    } else {
        document.getElementById('mapa').innerHTML = 'Geolocation não está funcionando';
    }
    
}

google.maps.event.addDomListener(window, 'load', initialize);