var apiKey = "AIzaSyDVRxDf-d9elarp-IRAC-hBYrx6nevrGLM";

Channel = function(){
  var userName;
};

Channel.prototype.getVideoNames = function(){
  // $.get("")
};

Channel.prototype.setUserName = function (userName){
  this.userName = userName;
};

Channel.prototype.getUserName = function(){
  return this.userName;
};

exports.channelModule = Channel;
