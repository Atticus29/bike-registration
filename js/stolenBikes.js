Bike = function(dateStolen, frameColors, frameModel, id, imageUrl, manufacturer, serial, location, title, year){
  this.dateStolen = dateStolen;
  this.frameColors = frameColors;
  this.frameModel = frameModel;
  this.id = id;
  this.imageUrl = imageUrl;
  this.manufacturer = manufacturer;
  this.serial = serial;
  this.location = location;
  this.title = title;
  this.year = year;
};

Bike.prototype.addStolenBikesToArray = function(allBikes){
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=9421%20North%20Portsmouth%20Ave%2C%20Portland%2C%20OR&distance=10&stolenness=stolen")
  .then(function(response){
    response.bikes.forEach(function(bike){
      var currentBike = new Bike(bike.date_stolen, bike.frame_colors, bike.frame_model, bike.id, bike.thumb, bike.manufacturer_name, bike.serial, bike.stolen_location, bike.title, bike.year);
      allBikes.push(currentBike);
      // this displays an ever-growing array of bike objects
      console.log(allBikes);
    });
  })
  .then(console.log(allBikes));
  // determineMostStolenManufacturer(allBikes)
};

Bike.prototype.setColor = function (userName){
  this.userName = userName;
};


exports.bikeModule = Bike;
// exports.bikeArray = allBikes;
