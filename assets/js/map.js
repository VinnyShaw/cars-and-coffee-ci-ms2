// Renders the map centered at Inverness, Scotland.
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.5,
    center: {
      lat: 57.4679914,
      lng: -4.256877,
    },
  });

  // Declares var markers as an array
  var markers = new Array();

  // Assigns different marker icons to each route
  var IconStyle = {};

  IconStyle["Start"] = "http://www.google.com/mapfiles/dd-start.png";
  IconStyle["Route1"] =
    "http://labs.google.com/ridefinder/images/mm_20_green.png";
  IconStyle["Route2"] =
    "http://labs.google.com/ridefinder/images/mm_20_yellow.png";
  IconStyle["Route3"] =
    "http://labs.google.com/ridefinder/images/mm_20_blue.png";

  // todo: how do I change what info is needed, how do I draw line between markers?
  // todo: make sure start has a diff colour in each route
  // Todo: zoom to fit function?
  // todo: Need to add fuel stops, food/drink, POI

  // This var is an array of strings of route location info
  var locations = [
    // Meeting/start point
    ["Rollerbowl", "Food/Drink", "Start", 57.4508937, -4.2249295, 1],

    // Route1
    ["Rollerbowl", "Meeting", "Route1", 57.4508937, -4.2249295, 2],

    ["The Dores Inn", "Food/Drink", "Route1", 57.3819217, -4.3353143, 3],

    ["Fort Augustus", "Food/Drink", "Route1", 57.1443685, -4.6928865, 4],

    ["Drumnadrochit", "Food/Drink", "Route1", 57.3295764, -4.4936363, 5],

    // Route2
    ["Rollerbowl", "Food/Drink", "Start", 57.4508937, -4.2249295, 1],

    ["Rosemarkie", "Food/Drink", "Route2", 57.5911051, -4.1209987, 5],

    ["Cromarty", "Food/Drink", "Route2", 57.6800112, -4.0377614, 6],

    ["Tore", "Testing", "Route2", 57.5405982, -4.3372647, 7],

    // Route3
    ["Rollerbowl", "Food/Drink", "Start", 57.4508937, -4.2249295, 1],

    ["Nairn", "Food/Drink", "Route3", 57.5810886, -3.889248, 8],

    ["Furness", "Food/Drink", "Route3", 57.4855782, -3.7376227, 9],

    ["Carrbridge", "Testing", "Route3", 57.2845402, -3.8174617, 10],
  ];

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][3], locations[i][4]),

      map: map,

      icon: IconStyle[locations[i][2]],
    });

    markers.push(marker);

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(
            locations[i][0] +
              "<br />" +
              locations[i][1] +
              "<br />" +
              locations[i][2]
          );

          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}

// Todo: How to display a route with directions?
