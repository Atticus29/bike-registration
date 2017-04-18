// var userAlarmTime = moment().add(7, 'days');
var counter = 0;

function Alarm(){
  var time;
}

Alarm.prototype.alarmAlert = function(){
  var now = moment();
  console.log(this.time); //.format("HH:mm")
  if(this.time && now.isSameOrAfter(this.time) && counter < 1){
    alert("Wake up!");
    counter++;
    unleashAlarmingThings();
  }
};

Alarm.prototype.setAlarm = function(userTime){
  this.time = moment(userTime, 'HH:mm');
};

exports.alarmModule = Alarm;
