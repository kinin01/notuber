<let map;

function initMap() {
// new map
    var map = new google.maps.Map(document.getElementById("map"), options);
//map options
    var options= {
    center: { lat: 51.5195786, lng: -0.0606907},
    zoom: 8,
  }

// add marker

    var marker= new google maps. maps.marker({ 
      position: { lat:  51.5090562, lng: -0.1304571},
      map:map,
      icon: "coursework-part-i-01/images/car.png"
  });
}
