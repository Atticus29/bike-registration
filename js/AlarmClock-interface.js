var Alarm = require('../js/alarmClock.js').alarmModule;
var currentTime = null;
var datetime = null;


var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
};

var unleashAlarmingThings = function(){

};

$(document).ready(function() {
  datetime = $('#clock-display');
  var currentAlarm = new Alarm();
  update();
  setInterval(update, 1000);
  setInterval(function(){
    currentAlarm.alarmAlert()
  }
  , 1000);
  $('#alarm-form').submit(function() {
    event.preventDefault();
    var userTime = $('#alarm-time').val();
    currentAlarm.setAlarm(userTime);
    console.log(currentAlarm);
    // userAlarmTime = moment(userTime,'HH:mm');
    $('#times').append('<li>' + userTime + '</li>');
  });
});
