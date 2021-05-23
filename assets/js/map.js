// Renders the map centered at Inverness, Scotland.
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.5,
    center: {
      lat: 57.4679914,
      lng: -4.256877,
    },
  });
}
