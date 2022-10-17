function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            //'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521'
            $.getJSON('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude, {
                // format : 'jsonv2',
                // lat: position.coords.latitude,
                // lng: position.coords.longitude
            }, function (result) {

                $("#demo").html("Pays : " + result.address.country + "&nbsp; R&eacute;gion : " + result.address.state + "&nbsp; lon : " + result.lon + "&nbsp; lat : " + result.lat);
                console.log(result);

                // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                var macarte = L.map('mymap').setView([result.lat, result.lon], 15);

                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    attribution: '<a href="https://openstreetmap.org/copyright" target="_blank">Contributeurs de OpenStreetMap</a>&nbsp;&hearts;&nbsp;<a href="https://donate.openstreetmap.org" target="_blank">Faire un don</a>',
                    minZoom: 1,
                    maxZoom: 18
                }).addTo(macarte);

                var marker = L.marker([result.lat, result.lon]).addTo(macarte);

            });
        });
} else {
        $("#demo").html("La G&eacute;olocalisation est d&eacute;sactiv&eacute; ou impossible sur ce navigateur");
    }
}