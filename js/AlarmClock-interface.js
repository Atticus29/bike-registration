// var apiKey = require('./../.env').apiKey;
// var clock = require('./../js/alarmClock.js').weatherModule;

var currentTime = null;
var datetime = null;
var userAlarmTime = null;

var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
  shouldAlarmGoOff(userAlarmTime)
  console.log(userAlarmTime);
}

var shouldAlarmGoOff = function(alarmTime){
  var now = moment();
  console.log(now);
  if(now.isAfter(alarmTime)){
    console.log("Alarm should go off now!: " + now);
  } else{
    console.log("Alarm should not go off now.");
  }
  return now.isAfter(alarmTime);
}

$(document).ready(function() {
  // event.preventDefault();
  datetime = $('#clock-display');
  update();
  setInterval(update, 800000);
  $('#alarm-form').submit(function() {
    event.preventDefault();
    var userTime = $('#alarm-time').val();
    console.log(typeof userTime);
    userAlarmTime = moment(userTime,'HH:MM');
    console.log(typeof userAlarmTime);
    console.log(userAlarmTime);
    $('#times').append('<li>' + userTime + '</li>');
  });
});
