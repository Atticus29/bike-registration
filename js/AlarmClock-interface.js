// var apiKey = require('./../.env').apiKey;
// var clock = require('./../js/alarmClock.js').weatherModule;

var currentTime = null;
var datetime = null;

var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
}

$(document).ready(function() {
  // var currentAlarmClock = new alarmClock();
  // var currentTime = moment();
  datetime = $('#clock-display');
  update();
  // $("#clock-display").text(currentTime);
  setInterval(update, 1000);
  $('#alarm-form').submit(function() {
    // var city = $('#location').val();
    // $('#location').val("");
    // currentWeatherObject.getWeather(city, displayHumidity);
  });
});
