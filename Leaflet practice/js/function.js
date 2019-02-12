$(document).ready(function () {
    let mymap = L.map('kaart').setView([51.680899, 5.294163], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20
    }).addTo(mymap);

    var geojsonFeature =
        {
            "type": "FeatureCollection",
            "totalFeatures": 62,
            "features": [{
                "type": "Feature",
                "id": "studenten.1",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.064192, 48.458798]
                },
                "geometry_name": "geom",
                "properties":
                    {"naam": "Maude", "opmerking": null}
            },
                {
                    "type": "Feature",
                    "id": "studenten.2",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [5.89066584, 51.24675864]
                    },
                    "geometry_name": "geom",
                    "properties":
                        {
                            "naam": "Simon",
                            "opmerking": null
                        }
                },
                {
                    "type": "Feature",
                    "id": "studenten.3",
                    "geometry":
                        {
                            "type": "Point",
                            "coordinates": [5.4098022, 51.6749271]
                        },
                    "geometry_name": "geom",
                    "properties": {"naam": "Bram", "opmerking": null}
                },
                {
                    "type": "Feature",
                    "id": "studenten.4",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [5.42218834, 52.08384735]
                    },
                    "geometry_name": "geom",
                    "properties": {
                        "naam": "Jesse",
                        "opmerking": null
                    }
                },
                {
                    "type": "Feature",
                    "id": "studenten.5",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [4.98527876, 51.59119505]
                    },
                    "geometry_name": "geom",
                    "properties": {
                        "naam": "Sean",
                        "opmerking": null
                    }
                },
                {
                    "type": "Feature",
                    "id": "studenten.6",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [5.02939251, 51.98532707]
                    },
                    "geometry_name": "geom", "properties": {"naam": "Javier", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.7",
                    "geometry": {"type": "Point", "coordinates": [4.9348075, 51.9535352]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jonathan", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.8",
                    "geometry": {"type": "Point", "coordinates": [5.2190545, 51.77475277]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Bas", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.9",
                    "geometry": {"type": "Point", "coordinates": [5.60151293, 52.1067387]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Aline", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.10",
                    "geometry": {"type": "Point", "coordinates": [5.94249875, 51.8541881]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Niels", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.11",
                    "geometry": {"type": "Point", "coordinates": [5.12895648, 51.4862984]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Max", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.12",
                    "geometry": {"type": "Point", "coordinates": [5.25243217, 51.69485701]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Floor", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.13",
                    "geometry": {"type": "Point", "coordinates": [4.77493006, 52.0035851]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Felicia", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.14",
                    "geometry": {"type": "Point", "coordinates": [5.28550802, 51.72919293]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Thom", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.15",
                    "geometry": {"type": "Point", "coordinates": [4.55956724, 51.90183863]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Charlotte", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.16",
                    "geometry": {"type": "Point", "coordinates": [4.65329739, 51.57789967]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jeroen", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.17",
                    "geometry": {"type": "Point", "coordinates": [4.39036911, 51.51806453]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Timon", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.18",
                    "geometry": {"type": "Point", "coordinates": [5.22543876, 51.62645294]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Hugo", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.19",
                    "geometry": {"type": "Point", "coordinates": [6.00492877, 52.21947373]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Esther", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.20",
                    "geometry": {"type": "Point", "coordinates": [5.13619937, 51.48350073]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Pieterjan", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.21",
                    "geometry": {"type": "Point", "coordinates": [5.05937358, 51.68416157]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Milou", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.22",
                    "geometry": {"type": "Point", "coordinates": [5.197981, 52.06987728]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Duco", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.23",
                    "geometry": {"type": "Point", "coordinates": [4.88197293, 51.80477424]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Max", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.24",
                    "geometry": {"type": "Point", "coordinates": [5.67376997, 51.97810855]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Wouter", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.25",
                    "geometry": {"type": "Point", "coordinates": [4.95896041, 52.08888993]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jeroen", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.26",
                    "geometry": {"type": "Point", "coordinates": [5.3980592, 51.6751906]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Pim", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.27",
                    "geometry": {"type": "Point", "coordinates": [5.334295, 51.59576549]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Hidde", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.28",
                    "geometry": {"type": "Point", "coordinates": [5.18887482, 51.69303833]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Daniëlle", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.29",
                    "geometry": {"type": "Point", "coordinates": [5.57353135, 51.48638078]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Marc", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.30",
                    "geometry": {"type": "Point", "coordinates": [5.84995816, 51.82908366]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Boudewijn", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.31",
                    "geometry": {"type": "Point", "coordinates": [5.54841075, 51.61742301]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Alex", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.32",
                    "geometry": {"type": "Point", "coordinates": [5.37647096, 51.56615946]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Hidde", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.33",
                    "geometry": {"type": "Point", "coordinates": [5.07881803, 51.68060096]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Lisa", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.34",
                    "geometry": {"type": "Point", "coordinates": [5.13857356, 52.06882586]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Niels", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.35",
                    "geometry": {"type": "Point", "coordinates": [5.66018451, 51.49717833]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Martijn", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.36",
                    "geometry": {"type": "Point", "coordinates": [4.47394115, 51.93883805]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Tara", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.37",
                    "geometry": {"type": "Point", "coordinates": [4.845631, 51.58007285]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Susanne", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.38",
                    "geometry": {"type": "Point", "coordinates": [5.54452968, 51.7721583]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Geert", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.39",
                    "geometry": {"type": "Point", "coordinates": [5.32869945, 51.68310524]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Gijs", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.40",
                    "geometry": {"type": "Point", "coordinates": [5.3066865, 51.69413075]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jasper", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.41",
                    "geometry": {"type": "Point", "coordinates": [6.59986008, 52.0382161]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jur", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.42",
                    "geometry": {"type": "Point", "coordinates": [6.18687236, 51.34911036]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Ricky", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.43",
                    "geometry": {"type": "Point", "coordinates": [5.25967099, 51.89680288]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Roos", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.44",
                    "geometry": {"type": "Point", "coordinates": [5.631678, 52.0240163]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Anne Jasmijn", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.45",
                    "geometry": {"type": "Point", "coordinates": [5.99099285, 51.18929569]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Gijs", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.46",
                    "geometry": {"type": "Point", "coordinates": [5.05615385, 51.56052122]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Judith", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.47",
                    "geometry": {"type": "Point", "coordinates": [5.94547412, 51.76054582]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Brian", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.48",
                    "geometry": {"type": "Point", "coordinates": [5.31240868, 51.59067496]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Okke", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.49",
                    "geometry": {"type": "Point", "coordinates": [5.06806373, 52.12854724]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Kaan", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.50",
                    "geometry": {"type": "Point", "coordinates": [5.43141516, 51.60432602]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Menno", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.51",
                    "geometry": {"type": "Point", "coordinates": [5.32869945, 51.68310524]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Jeffrey", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.52",
                    "geometry": {"type": "Point", "coordinates": [5.02361186, 51.66862539]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Ellis", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.53",
                    "geometry": {"type": "Point", "coordinates": [6.08451766, 51.46220748]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Simone", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.54",
                    "geometry": {"type": "Point", "coordinates": [5.78258952, 51.76132333]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Max", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.55",
                    "geometry": {"type": "Point", "coordinates": [5.63829975, 51.67459945]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Max", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.56",
                    "geometry": {"type": "Point", "coordinates": [4.81144026, 52.05590822]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Sjoerd", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.57",
                    "geometry": {"type": "Point", "coordinates": [4.7666408, 51.82429942]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Max", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.58",
                    "geometry": {"type": "Point", "coordinates": [5.38588853, 52.15006465]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Toon", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.59",
                    "geometry": {"type": "Point", "coordinates": [4.27967501, 52.09531116]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Bor", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.60",
                    "geometry": {"type": "Point", "coordinates": [5.71883056, 51.3877304]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Hilke", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.61",
                    "geometry": {"type": "Point", "coordinates": [5.90949674, 51.98024078]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Tomas", "opmerking": null}
                }, {
                    "type": "Feature",
                    "id": "studenten.62",
                    "geometry": {"type": "Point", "coordinates": [5.39113222, 52.16417733]},
                    "geometry_name": "geom",
                    "properties": {"naam": "Rick", "opmerking": null}
                }], "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:EPSG::4326"}}
        }

    L.geoJSON(geojsonFeature, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.naam, feature.properties);
        }
    }).addTo(mymap)

    let marker = L.marker([51.680971, 5.294413]).addTo(mymap).bindPopup("hallo daar");
//test
});