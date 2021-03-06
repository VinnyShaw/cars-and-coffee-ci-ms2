// Logs confirmation that the files are linked correctly
console.log("This means map.js is linked correctly");

// Renders the map centered and zoomed for Inverness, Scotland.
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.5,
    center: {
      lat: 57.4679914,
      lng: -4.256877,
    },
    mapTypeId: "roadmap",
  });

  var markers = [];

  var IconStyle = {};

  IconStyle.Start =
    "https://www.google.com/mapfiles/dd-start.png";
  IconStyle.Route1 =
    "https://labs.google.com/ridefinder/images/mm_20_green.png";
  IconStyle.Route2 =
    "https://labs.google.com/ridefinder/images/mm_20_yellow.png";
  IconStyle.Route3 =
    "https://labs.google.com/ridefinder/images/mm_20_blue.png";
  IconStyle.Fuel =
    "https://labs.google.com/ridefinder/images/mm_20_purple.png";
  IconStyle.FoodAndDrink =
    "https://labs.google.com/ridefinder/images/mm_20_orange.png";

  var locations = [
    // Meeting/start point of all routes
    ["Rollerbowl", "Food/Drink", "Start", 57.4508937, -4.2249295, 1],

    // Route1
    ["Rollerbowl", "Meeting", "Route1", 57.4508937, -4.2249295, 2],

    ["The Dores Inn", "Food/Drink", "Route1", 57.3819217, -4.3353143, 3],

    ["Falls of Foyers", "POI", "Route1", 57.2424245, -4.4994154, 4],

    ["Fort Augustus", "Food/Drink", "Route1", 57.1443685, -4.6928865, 5],

    ["Drumnadrochit", "Food/Drink", "Route1", 57.3295764, -4.4936363, 6],

    // Route2
    ["Rollerbowl", "Food/Drink", "Route2", 57.4508937, -4.2249295, 1],

    ["Avoch", "Food/Drink", "Route2", 57.5667647, -4.1801286, 7],

    ["Rosemarkie", "Food/Drink", "Route2", 57.5911051, -4.1209987, 8],

    ["Cromarty", "Food/Drink", "Route2", 57.6800112, -4.0377614, 9],

    ["Culbokie", "Food/Drink", "Route2", 57.6014132, -4.3471774, 10],

    ["Tore", "Testing", "Route2", 57.5405982, -4.3372647, 11],

    // Route3
    ["Rollerbowl", "Food/Drink", "Route3", 57.4508937, -4.2249295, 1],

    ["Nairn", "Food/Drink", "Route3", 57.5810886, -3.889248, 12],

    ["Furness", "Food/Drink", "Route3", 57.4855782, -3.7376227, 13],

    ["Carrbridge", "Testing", "Route3", 57.2845402, -3.8174617, 14],

    // Fuel/ Food/drink

    ["Tesco Petrol Station", "Fuel", "Fuel", 57.4515308, -4.2515191, 15],

    ["Tesco", "Food/Drink", "FoodAndDrink", 57.4516699, -4.2512913, 16],

    ["Asda Petrol Station", "Fuel", "Fuel", 57.4494082, -4.2231996, 17],

    ["Asda", "Food/Drink", "FoodAndDrink", 57.4508756, -4.2165246, 18],

    ["Gulf Petrol Station", "Fuel", "Fuel", 57.1459563, -4.6814475, 19],

    ["Esso Petrol Station", "Fuel", "Fuel", 57.3282367, -4.4751315, 20],

    ["Esso Petrol Station", "Fuel", "Fuel", 57.4870786, -4.2208433, 21],

    ["Esso Petrol Station", "Fuel", "Fuel", 57.5405981, -4.3287058, 22],

    ["Tesco Petrol Station", "Fuel", "Fuel", 57.4824777, -4.1806726, 23],

    ["Tesco", "Food/Drink", "FoodAndDrink", 57.483111, -4.1744369, 24],

    ["sainsbury's Petrol Station", "Fuel", "Fuel", 57.5824859, -3.8520364, 25],

    ["Sainsbury's", "Food/Drink", "FoodAndDrink", 57.5815428, -3.8527472, 26],

    ["Pace Petrol Station", "Fuel", "Fuel", 57.2841569, -3.8157643, 27],
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

  hide("Fuel");

  hide("FoodAndDrink");

  $(".form-check-input").click(function () {
    var cat = $(this).attr("value");

    // Checkbox behaviour

    if ($(this).is(":checked")) {
      show(cat);
    } else {
      hide(cat);
    }
  });
}
