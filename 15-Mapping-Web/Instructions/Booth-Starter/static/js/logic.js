// Store the API query variables.
var baseURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";
// Add the timeframe
var timeframe = "all_hour.geojson";

// build URL
var url = baseURL + timeframe;

// geojson
var tectonic_plates_url = "https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json";

$(document).ready(function() {
    // AJAX
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
            makeMap(data);

        },
        error: function(data) {
            console.log("YOU BROKE IT!!");
        },
        complete: function(data) {
            console.log("Request finished");
        }
    });
});


function makeMap(data) {
    // Create the base layers.
    var dark_layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/dark-v10',
        accessToken: API_KEY
    });

    var light_layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v10',
        accessToken: API_KEY
    });

    // Create a baseMaps object to contain the streetmap and the darkmap.
    var baseMaps = {
        "Dark": dark_layer,
        "Light": light_layer
    };

    // DO WORK AND CREATE THE OVERLAY LAYERS
    // GEO JSON MARKER LAYER
    let features = data.features;
    let geoLayer = L.geoJSON(features, {
        onEachFeature: onEachFeature
    });

    /// LOOP
    var heatArray = [];
    for (var i = 0; i < data.features.length; i++) {
        var location = data.features[i].geometry;

        if (location) {
            // add heat map data
            heatArray.push([location.coordinates[1], location.coordinates[0]]);

        }
    }

    if (location) {
        let marker = L.marker([location.coordinates[1], location.coordinates[0]]);
        marker.bindPopup("<h1>" + features[i].property.map + "</h1> <hr> <h2>" + features[i].property.map + "</h2>");
        crimeMarkers.push(marker);
    }
}

// create the marker
let circle = L.circle([location.coordinates[1], location.coordinates[0]], {
    fillOpacity: 0.75,
    color: makeColor(features[i].property.map),
    fillColor: makeColor(features[i].property.map),
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: makeRadius(country.points)
}).bindPopup(`<h1>${country.name}</h1> <hr> <h3>Points: ${country.points.toLocaleString()}</h3>`).addTo(myMap);


var heatLayer = L.heatLayer(heatArray, {
    radius: 50,
    blur: 15
});


// Create an overlayMaps object to contain the "State Population" and "City Population" layers
var overlayMaps = {
    "Earthquakes": geoLayer,
    "Heat Map": heatLayer
};

// Modify the map so that it has the streetmap, states, and cities layers
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [dark_layer, geoLayer]
});

// Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);


// Helper Function
function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
}


// HELPER FUNCTION FOR RADIUS
function makeRadius(magnitude) {
    // Adjust the radius
    return magnitude * 100;
}

// HELPER FUNCTION FOR COLOR
function makeColor(magnitude) {
    let rtnColor = "red";

    // Conditionals for country points
    if (magnitude > 5) {
        rtnColor = "yellow";
    } else if (magnitude > 3) {
        rtnColor = "blue";
    } else if (magnitude > 1) {
        rtnColor = "green";
    } else {
        rtnColor = "red";
    }

    return rtnColor;
}