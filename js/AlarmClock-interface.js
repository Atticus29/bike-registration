// var apiKey = require('./../.env').apiKey;
// var clock = require('./../js/alarmClock.js').weatherModule;

var currentTime = null;
var datetime = null;
userAlarmTime = moment().add(7, 'days');
var alarmID;

var update = function(){
  currentTime = moment();
  datetime.html(currentTime.format('h:mm:ss a'));
}

function alarmAlert() {
  $.get('http://worldclockapi.com/api/json/utc/now', function(response){
    // console.log(response.currentDateTime);
    var now = moment(response.currentDateTime); //.format("HH:mm")
    console.log(now);
    console.log(userAlarmTime);
    if(userAlarmTime.isBefore(now)){
      alert("Wake up!");
    }
    // console.log(userAlarmTime.utc());
    // var s = moment(userAlarmTime.diff(now, 'seconds'));
    // console.log(s);
    // console.log(s.i);
    // console.log(s.i());
    // console.log(s[1]);
    // console.log(parseInt(s.format("ss")));
    // alarmID = window.setTimeout(alert("wake up!"),moment(userAlarmTime.diff(now)));
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
    // console.log(typeof userTime);
    userAlarmTime = moment(userTime,'HH:mm').utc();
    alarmAlert(userAlarmTime);
    // userAlarmTime = moment(userTime,'MM:HH');
    // console.log(typeof userAlarmTime);
    // console.log(userAlarmTime);
    $('#times').append('<li>' + userTime + '</li>');
  });
  // setInterval(alarmAlert, 800000);
});
