var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videos = ['M7lc1UVf-VE','gEdGtj8Anno','AajZuLs-Rsc'];
var players = [];

function onYouTubeIframeAPIReady() {
  for(var i=0;i<videos.length;i++){
    var num = i+1
    players[num] = new YT.Player('videoPlayer'+num, {
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

$(function(){
  $('.button').on('click', function(){
    var duration = players[1].getDuration();
    console.log(duration*10/2)
    players[1].playVideo();
    checkPlayerState();
  });
  function checkPlayerState(){
    if(players[1].getPlayerState() !== 0){
      setTimeout(function(){
       checkPlayerState();
       console.log('check');
     },1000)
    }else{
      console.log('stopped')
      players[1].playVideo();
      setTimeout(function(){
        players[1].pauseVideo();
      },1000)
    }
  };
});