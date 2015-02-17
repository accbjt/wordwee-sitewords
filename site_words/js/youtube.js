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
  $('.player td').on('click', 'a', function() {
    $(this)
      .next()
        $(this).parent().siblings().hide();
        $(this).addClass("fullscreen-pause");
        console.log($(this));
        $(this).parent().addClass("fullscreen");
        $(this).parent().parent().siblings().hide();
        playPauseVideo($(this), $(this).parent().children('iframe'));
  });
};
var playerState;
var iframeId

function playPauseVideo(element, iframe){
  if(playerState === undefined){
      playerState = 'play'
      iframeId = parseInt(iframe.attr('id').slice(11));
      var duration = players[iframeId].getDuration();
      players[iframeId].playVideo();
      players[iframeId].unMute();
      checkPlayerState(iframeId);
  }
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
  $('.fullscreen-pause').bind('click', function(){
    playerState = 'pause'
    var duration = players[iframeId].getDuration();
    players[iframeId].pauseVideo();
    $(this).unbind('click');
    console.log('pause')
    $(this).addClass('fullscreen-play');
    $(this).removeClass('fullscreen-pause');
  });
  $('.fullscreen-play').bind('click', function(){
    playerState = 'pause'
    var duration = players[iframeId].getDuration();
    players[iframeId].playVideo();
    $(this).unbind('click');
    console.log('play')
    $(this).addClass('fullscreen-pause');
    $(this).removeClass('fullscreen-play');
  });
}

$.ajax({
    url: 'https://gdata.youtube.com/feeds/api/videos?q=mya+full+time+kid&start-index=1&safeSearch=strict&max-results=50&durations=short&v=2&alt=jsonc',
    dataType: "json",
    success:  function(data) {
                var youtubeJsonList = data.data.items
                youtubeJsonList.forEach(function(data){
                 videos.push(data.id.toString());
               })
                // function for creating a row and column
              var rows = 10; //here's your number of rows and columns
              var cols = 5;
              var table = $('<table><tbody>');
              for(var r = 0; r < rows; r++){
                var tr = $('<tr>');
                for (var c = 0; c < cols; c++)
                  $('<td></td>').appendTo(tr); //fill in your cells with something meaningful here
                tr.appendTo(table);
              }

              table.appendTo('section.player');
              $('.player td').each(function(index){
                console.log($(this));
                $(this).append('<a href="#"></a><div id="videoPlayer'+index+'"></div>')
              })
              
              onYouTubeIframeAPIReady();
              chosenVideoToPlay();
              }

});