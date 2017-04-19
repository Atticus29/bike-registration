var Bike = require("./../js/stolenBikes.js").bikeModule;

var determineMostStolenManufacturer = function(bikeArray){
  var manufacturerArray = getArrayOfManufacturers(bikeArray);
  console.log(manufacturerArray);
};

var getArrayOfManufacturers = function(bikeArray){
  var manufacturerArray = [];
  bikeArray.forEach(function(bike){
    manufacturerArray.push(bike.manufacturer);
  });
  return manufacturerArray;
};

$(function(){
  var currentBike = new Bike();
  var allBikes = [];
  currentBike.addStolenBikesToArray(allBikes);
});
