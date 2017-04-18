// var userAlarmTime = moment().add(7, 'days');

function Alarm(){
  var time;
}

Alarm.prototype.alarmAlert = function(){
  var now = moment();
  console.log(this.time); //.format("HH:mm")
  if(this.time && now.isSameOrAfter(this.time)){
    alert("Wake up!");
  }
};

Alarm.prototype.setAlarm = function(userTime){
  this.time = moment(userTime, 'HH:mm');
};

exports.alarmModule = Alarm;
