var Bike = require("./../js/stolenBikes.js").bikeModule;

var populateWithLocalAndGlobalMostStolenManufacturersAndTheirCounts = function(globalBikeArray, localBikeArray){

}

var determineMostStolenManufacturerAndCount = function(bikeArray){
  var manufacturerArray = bikeArray.map((bike)=>{ return bike.manufacturer});
  console.log(manufacturerArray);
  // var manufacturerArray = getArrayOfManufacturers(bikeArray);
  var mostStolen = getMostCommonAndItsCount(manufacturerArray);
  console.log(mostStolen);
  // return mostStolen;
};

function getMostCommonAndItsCount(array)
{
    if(array.length === 0) //interestin
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return {maxEl, maxCount};
}

// var getArrayOfManufacturers = function(bikeArray){
//   var manufacturerArray = [];
//   bikeArray.forEach(function(bike){
//     manufacturerArray.push(bike.manufacturer);
//   });
//   return manufacturerArray;
// };

$(() => {
  var currentBike = new Bike();
  var address = $("#address").val();
  currentBike.addStolenBikesToArray(determineMostStolenManufacturerAndCount, address);
});
