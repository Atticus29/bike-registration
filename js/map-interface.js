var apiKey = require('./../.env').mapKey;


Map = function(){

}

Map.prototype.findLatLong = function(address){
  $.get()
  .then((result) =>{
    console.log(result.geometry.location);
    return result.geometry.location;
  })
}

.geometry.location

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
