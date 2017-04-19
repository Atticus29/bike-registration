const getChannelName = function(){
  $("#search-form").submit(function(){
    event.preventDefault();
    let userChannelName = $("#channel-name").val();
    console.log(userChannelName);
  });
}

getChannelName();
