var apiKey = require('./../.env').mapKey;


Map = function(){

}

// Map.prototype.findLatLong = function(address){
//   $.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+apiKey)
//     .then((response) =>{
//       var returnObj = response.results[0].geometry.location;
//       // console.log(returnObj);
//       return returnObj;
//     })
//     .fail((error)=>{
//       console.log(error.responseJSON.message);
//     })
// }
