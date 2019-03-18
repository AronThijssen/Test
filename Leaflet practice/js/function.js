$(document).ready(function () {

    let grijs = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
    let normaal = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    let mymap = L.map('kaart', {
        layers: normaal,
        center: [51.680899, 5.294163],
        zoom: 8,
        
    });

    TB = new L.LayerGroup();
    BA = new L.LayerGroup();
    BV = new L.LayerGroup();
    DV = new L.LayerGroup();
    FI = new L.LayerGroup();
    FV = new L.LayerGroup();
    GM = new L.LayerGroup();
    HBM = new L.LayerGroup();
    IF = new L.LayerGroup();
    IV = new L.LayerGroup();
    MK = new L.LayerGroup();
    ML = new L.LayerGroup();
    TA = new L.LayerGroup();
    TV = new L.LayerGroup();
    VM = new L.LayerGroup();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20
    }).addTo(mymap);


    $.ajax({
        method: 'GET',
        url: 'http://geoserver.has.nl/geoserver/Internationale-kaart/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Internationale-kaart:huidige%20stages&outputFormat=application%2Fjson',
        dataType: 'json',
        success: function (data) {
            $.each(data.features, function (i, feature) {

                Content = feature.properties.Voornaam + " " + feature.properties.Tussenvoegsel + " " + feature.properties.Achternaam + "<br\>" + feature.properties.Instelling_naam + "<br/>" + feature.properties.Opleidingscode;

                let markerltlng = L.marker([feature.properties.Latitude, feature.properties.Longitude]).bindPopup(Content);


                if (feature.properties.Opleidingscode === 'TB') {
                    TB.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'BA') {
                    BA.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'BV') {
                    BV.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'DV') {
                    DV.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'FI') {
                    FI.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'FV') {
                    FV.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'GM') {
                    GM.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'HBM') {
                    HBM.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'IF') {
                    IF.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'IV') {
                    IV.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'MK') {
                    MK.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'ML') {
                    ML.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'TA') {
                    TA.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'TV') {
                    TV.addLayer(markerltlng);
                }
                if (feature.properties.Opleidingscode === 'VM') {
                    VM.addLayer(markerltlng);
                }
                if (feature.properties.Voornaam === 'Mick' && feature.properties.Achternaam === 'Reijnders') {
                    alert('success!')
                }

                //                let basisMap = {
                //                    "normaal": normaal,
                //                    "grijs": grijs
                //                };
                //
                //
                //                let overlayMap = {
                //                    "TB": TB,
                //                    "BA": BA
                //
                //                };
                //
                //                L.control.layers(basisMap, overlayMap).addTo(mymap);
                //
            });

            let overlayMap = {
                "TB": TB,
                "BA": BA,
                "BV": BV,
                "DV": DV,
                "FI": FI,
                "FV": FV,
                "GM": GM,
                "HBM": HBM,
                "IF": IF,
                "IV": IV,
                "MK": MK,
                "ML": ML,
                "TA": TA,
                "TV": TV,
                "VM": VM

            };

            let basisMap = {

                "normaal": normaal,
                "grijs": grijs

            };


            L.control.layers(basisMap, overlayMap).addTo(mymap);


        }
    });
});
