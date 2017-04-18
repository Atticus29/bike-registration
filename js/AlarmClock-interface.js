// var apiKey = require('./../.env').apiKey;
// var clock = require('./../js/alarmClock.js').weatherModule;

var currentTime = null;
var datetime = null;
var userAlarmTime = null;
var alarmID;

var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
  shouldAlarmGoOff(userAlarmTime)
  console.log(userAlarmTime);
}
function alarmAlert(userAlarmTime) {
  $.get('http://worldclockapi.com/api/json/utc/now', function(response){
    console.log(response.currentDateTime);
    var now = moment(response.currentDateTime);
    alarmID = window.setTimeout(alert("wake up!"),(userAlarmTime.diff(now)));
  });
}

var shouldAlarmGoOff = function(alarmTime){

}

$(document).ready(function() {
  // event.preventDefault();
  datetime = $('#clock-display');
  update();
  setInterval(update, 1000);
  $('#alarm-form').submit(function() {
    event.preventDefault();
    var userTime = $('#alarm-time').val();
    console.log(typeof userTime);
    userAlarmTime = moment(userTime,'YYYY-MM-DDTHH:mmZ');
    // userAlarmTime = moment(userTime,'MM:HH');
    console.log(typeof userAlarmTime);
    console.log(userAlarmTime);
    alarmAlert(userAlarmTime);
    $('#times').append('<li>' + userTime + '</li>');
  });
});
