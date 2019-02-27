$(document).ready(function () {
    let mymap = L.map('kaart').setView([51.680899, 5.294163], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20
    }).addTo(mymap);

    $.ajax({
        method: 'GET',
        url: 'http://geoserver.has.nl/geoserver/Internationale-kaart/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Internationale-kaart:alleStages&outputFormat=application%2Fjson',
        dataType: 'json',
        success: function(data){

            $.each(data.features, function(i, feature){

                Content = feature.properties.Voornaam +" "+ feature.properties.Tussenvoegsel+" "+ feature.properties.Achternaam + "<br\>"+feature.properties.Instelling_naam;

                let markerStud = L.marker([feature.properties.Latitude, feature.properties.Longitude]).bindPopup(Content).addTo(mymap);

                switch(feature.properties.Opleidingscode) {

                    case 'TB':
                        let TB = L.layerGroup(markerStud);

                        console.log(Content);

                    case 'BA':
                        let BA = L.layerGroup(markerStud);

                    case 'BV':
                        let BV = L.layerGroup(markerStud);

                    case 'DV':
                        let DV = L.layerGroup(markerStud);

                    case 'FI':
                        let FI = L.layerGroup(markerStud);

                    case 'FV':
                        let FV = L.layerGroup(markerStud);

                    case 'GM':
                        let GM = L.layerGroup(markerStud);

                    case 'HBM':
                        let HBM = L.layerGroup(markerStud);

                    case 'IF':
                        let IF = L.layerGroup(markerStud);

                    case 'IV':
                        let IV = L.layerGroup(markerStud);

                    case 'MK':
                        let MK = L.layerGroup(markerStud);

                    case 'ML':
                        let ML = L.layerGroup(markerStud);

                    case 'TA':
                        let TA = L.layerGroup(markerStud);

                    case 'TV':
                        let TV = L.layerGroup(markerStud);

                    case 'VM':
                        let VM = L.layerGroup(markerStud);
                }

            });
        }
    });

    let marker = L.marker([51.680971, 5.294413]).addTo(mymap).bindPopup("hallo daar");

});