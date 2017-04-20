
var apiKey = require('./../.env').mapKey;
var Bike = require("./../js/stolenBikes.js").bikeModule;

$(() => {
  // OAuth.popup('facebook')
  //   .done((result) =>{
  //     console.log("You logged in!");
  //   })
  var currentBike = new Bike();
  $("#search-form").submit(() => {
    event.preventDefault();
    $(".hidden").show();
    var address = $("#address").val();
    var addressWithNoSpaces = findAndReplace(address, " ", "%20N%20");
    var addressWithNoCommas = findAndReplace(addressWithNoSpaces, ",", "%2C%20");
    currentBike.addAllStolenBikes(populateHTMLidWithMostStolenInfoFromBikeArray);
    currentBike.addLocalStolenBikes(populateHTMLidWithMostStolenInfoFromBikeArray, addressWithNoCommas);
    $.getScript("https://maps.googleapis.com/maps/api/js?key=" + apiKey, () =>{
      initMapAroundAddress(address, 'local-bike-map');
    });
  });
});
