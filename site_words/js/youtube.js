var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videos = [];
var players;
var videoThumbnails = [];

function youtubeSetup(i){
  function onYouTubeIframeAPIReady(i) {
    console.log('creating youtube')
    players = new YT.Player('videoPlayer', {
      height: '390',
      width: '640',
      videoId: videos[i],
      events: {
       'onReady': onPlayerReady,
               // 'onStateChange': onPlayerStateChange
             }
           });
  };
  onYouTubeIframeAPIReady(i);
  function onPlayerReady(event) {
    console.log('onplayerready')
    playPauseVideo();
  }
};

function chosenVideoToPlay(){
  $('.player a').on('click', function() {
    $(this)
      .next()
        $(this).parent().siblings().hide();
        $(this).parent().children('img').hide();
        $(this).addClass("fullscreen-pause");
        console.log("chosen video play "+$(this).parent().children('img').attr('src'));
        var videoIndex = $(this).parent().children('img').attr('src');
        var index = videoThumbnails.indexOf(videoIndex);
        $(this).parent().append('<div id="videoPlayer"></div>')
        youtubeSetup(index);
        $(this).parent().addClass("fullscreen");
        $(this).parent().parent().siblings().hide();
        $(this).unbind('click');
  });
};
var playerState;
var iframeId

function playPauseVideo(){
  if(playerState === undefined){
    playerState = 'play'
    var duration = players.getDuration();
    players.playVideo();
    players.unMute();
    checkPlayerState();
  }
  function checkPlayerState(){
    if(players.getPlayerState() !== 0){
      setTimeout(function(){
       checkPlayerState();
       console.log('check');
     },1000)
    }else{
      console.log('stopped')
      $('iframe').remove();
      $('.player table').remove();
      playerState = undefined;
      resetPlayer();
    }
  };
  function play(){
    $('.fullscreen-pause').bind('click', function(){
      playerState = 'pause'
      var duration = players.getDuration();
      players.pauseVideo();
      $(this).unbind('click');
      console.log('pause')
      $(this).addClass('fullscreen-play');
      $(this).removeClass('fullscreen-pause');
      pause();
    });
  };

  function pause(){
     $('.fullscreen-play').bind('click', function(){
      playerState = 'play'
      var duration = players.getDuration();
      players.playVideo();
      $(this).unbind('click');
      console.log('play')
      $(this).addClass('fullscreen-pause');
      $(this).removeClass('fullscreen-play');
      play();
    });
  };
  play();
  
}