// var apiKey = require('./../.env').apiKey;
// var clock = require('./../js/alarmClock.js').weatherModule;

var currentTime = null;
var datetime = null;

var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
}

$(document).ready(function() {
  datetime = $('#clock-display');
  update();
  setInterval(update, 1000);
  $('#alarm-form').submit(function() {
    event.preventDefault();
    var userTime = $('#alarm-time').val();
    console.log(typeof userTime);
    $('#times').append('<li>' + userTime + '</li>');
  });
});
