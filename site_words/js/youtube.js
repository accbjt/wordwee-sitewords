var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videos = [];
var players = [];

function onYouTubeIframeAPIReady() {
  for(var i=0;i<videos.length;i++){
    players[i] = new YT.Player('videoPlayer'+i, {
      height: '390',
      width: '640',
      videoId: videos[i],
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
    // function onPlayerReady(event) {
    //         // event.target.playVideo();
    // }
    // function onPlayerStateChange(event) {
    // }
  }
};

function chosenVideoToPlay(){
  $('.player span').on('click', 'a', function() {
    $(this)
      .next()
        $(this).parent().siblings().hide();
        $(this).addClass( "fullscreen")
        $(this).parent().children('iframe').addClass( "fullscreen")
        playPauseVideo($(this), $(this).parent().children('iframe'));
  });
};
var playerState;
var iframeId

function playPauseVideo(element, iframe){
  $(element).on('click', function(){
    if(playerState === undefined){
      playerState = 'play'
      console.log(element);
      iframeId = parseInt(iframe.attr('id').slice(11));
      var duration = players[iframeId].getDuration();
      console.log(duration*10/2)
      players[iframeId].playVideo();
      checkPlayerState(iframeId);
    }else if(playerState === 'play'){
      playerState = 'pause'
      players[iframeId].playVideo();
    }else if(playerState === 'pause'){
      playerState = 'play'
      players[iframeId].pauseVideo();
    }
  });
  function checkPlayerState(index){
    if(players[index].getPlayerState() !== 0){
      setTimeout(function(){
       checkPlayerState(index);
       console.log('check');
     },1000)
    }else{
      console.log('stopped')
      players[index].playVideo();
      setTimeout(function(){
        players[index].pauseVideo();
      },1000)
    }
  };
}

$.ajax({
    url: 'https://gdata.youtube.com/feeds/api/videos?q=frozen&v=2&alt=jsonc',
    dataType: "json",
    success:  function(data) {
                var youtubeJsonList = data.data.items
                youtubeJsonList.forEach(function(data){
                 videos.push(data.id.toString());
               })
                videos.forEach(function(index){
                  $('#mainScreen section').append('<span><a href="#"></a><div id="videoPlayer'+videos.indexOf(index)+'"></div></span>')
                });
                onYouTubeIframeAPIReady();
                chosenVideoToPlay();
              }
});