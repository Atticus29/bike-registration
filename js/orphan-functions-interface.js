// OAuth.initialize('AIzaSyDVRxDf-d9elarp-IRAC-hBYrx6nevrGLM');

var populateHTMLidWithMostStolenInfoFromBikeArray = function(listHTMLid, bikeArray){
  var mostStolen = determineMostStolenManufacturerAndCount(bikeArray);
  $("#" + listHTMLid).empty();
  $("#" + listHTMLid).append("<li>" + mostStolen.maxEl + " with " + mostStolen.maxCount + " bikes stolen</li>");
}

var determineMostStolenManufacturerAndCount = function(bikeArray){
  var manufacturerArray = bikeArray.map((bike)=>{ return bike.manufacturer});
  var mostStolen = getMostCommonAndItsCount(manufacturerArray);
  return mostStolen;
};

function getMostCommonAndItsCount(array)
{
  if(array.length === 0)
  return null;
  var modeMap = {};
  var maxEl = array[0], maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
    var el = array[i];
    if(modeMap[el] == null) //don't change this to ===!
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

function findAndReplace(string, target, replacement) {
  var i = 0, length = string.length;
  for (i; i < length; i++) {
    string = string.replace(target, replacement);
  }
  return string;
}

function initMapAroundAddress(address, htmlTagId) {
  var currentMapObj = new Map();
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+apiKey)
  .then((response) =>{
    var coordinates = response.results[0].geometry.location;
    // console.log(coordinates);
    var map = new google.maps.Map(document.getElementById(htmlTagId), {
      zoom: 11,
      center: coordinates
    });
    console.log(map);
    // var marker = new google.maps.Marker({
    //   position: coordinates,
    //   map: map
    // });
  });
}
