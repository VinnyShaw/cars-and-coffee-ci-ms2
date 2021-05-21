function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
      lat: 57.4679914,
      lng: -4.256877,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    //   Rollerbowl
    { lat: 57.4508937, lng: -4.2249295 },
    // The Dores Inn
    { lat: 57.3819217, lng: -4.3353143 },
    // Fort Augustus
    { lat: 57.1443685, lng: -4.6928865 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
