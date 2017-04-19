var Channel = require("./../js/videosearch.js").channelModule;



$(function(){
  var currentChannel = new Channel();
  $("#search-form").submit(function(){
    event.preventDefault();
    var userChannelName = $("#channel-name").val();
    currentChannel.setUserName(userChannelName);
    console.log(currentChannel.getUserName());
  });
});

// getChannelName();
