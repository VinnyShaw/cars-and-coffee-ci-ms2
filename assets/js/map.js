console.log("This means map.js is linked correctly");
// Renders the map centered at Inverness, Scotland.
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.5,
    center: {
      lat: 57.4679914,
      lng: -4.256877,
    },
    mapTypeId: "roadmap",
  });

  // Declares var markers as an array
  var markers = new Array();

  // Assigns different marker icons to each route
  var IconStyle = {};

  IconStyle["Start"] =
    "https://labs.google.com/ridefinder/images/mm_20_green.png";
  IconStyle["Route1"] =
    "https://labs.google.com/ridefinder/images/mm_20_green.png";
  IconStyle["Route2"] =
    "https://labs.google.com/ridefinder/images/mm_20_yellow.png";
  IconStyle["Route3"] =
    "https://labs.google.com/ridefinder/images/mm_20_blue.png";
  IconStyle["Fuel"] =
    "https://labs.google.com/ridefinder/images/mm_20_purple.png";
  IconStyle["FoodAndDrink"] =
    "https://labs.google.com/ridefinder/images/mm_20_orange.png";
  IconStyle["POI"] = "http://labs.google.com/ridefinder/images/mm_20_brown.png";

  // todo: how do I change what info is needed, how do I draw line between markers?
  // todo: make sure start has a diff colour in each route
  // Todo: zoom to fit function?
  // todo: Need to add fuel stops, food/drink, POI locations
  // Todo: How to display a route with directions?

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
    // Fuel/ food/drink, POI
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

  //Shows markers of a category, and checks the checkbox is checked
  function show(category) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i][2] == category) {
        markers[i].setVisible(true);
      }
    }
  }

  // Hides markers of a category, and checks the checkbox is cleared
  function hide(category) {
    for (var i = 0; i < locations.length; i++) {
      if (locations[i][2] == category) {
        markers[i].setVisible(false);
      }
    }
  }

  // Show or hide the categories at loading

  show("Start");

  hide("Route1");

  hide("Route2");

  hide("Route3");

  $(".form-check-input").click(function () {
    var cat = $(this).attr("value");

    // Checkbox behaviour

    if ($(this).is(":checked")) {
      show(cat);
    } else {
      hide(cat);
    }
  });
  // }

  // Todo: Get a polyline between markers/waypoints
  // Todo: Toggle it with route checkbox
  // Todo: Perhaps store the array and recall to the render function?
  // Todo: Make polyline follow roads
  // Todo: Make polyline toggle with checkboxes
  // Todo: Simplify the script
  // ToDo: Testing Area below

  // // Route1 coordinates
  // const Route1Coordinates = [
  //   { lat: 57.4508937, lng: -4.2249295 },
  //   { lat: 57.3819217, lng: -4.3353143 },
  //   { lat: 57.1443685, lng: -4.6928865 },
  //   { lat: 57.3295764, lng: -4.4936363 },
  // ];
  // // creates the polyline
  // const Route1 = new google.maps.Polyline({
  //   path: Route1Coordinates,
  //   geodesic: true,
  //   strokeColor: "#00FF00",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2,
  // });
  // // Sets it to the map
  // Route1.setMap(map);
}
