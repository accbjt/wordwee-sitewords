// 2. This code loads the IFrame Player API code asynchronously.
$(document).foundation();
var tag = document.createElement('script'),
    player;


var listOfWords = ['see','my','to','and','go','is','said','the','for','play','can','you','me','it','big','in','we','not','down','where','little','help','like','have','she','are','was','he','they','with','on','this','at','what','do','no','want','who','but','a','up','his','him','had','yes'],
	wordIndex = 0
	videoIndex = 0

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

shuffle(listOfWords);

function onYouTubeIframeAPIReady() {
  			player = new YT.Player('player', {
  				height: '720',
  				width: '500',
  				videoId: 'videoseries',
  				playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMhPErayo5hjHxlTWyNsCAmA']},
  				events: {
  					'onReady': onPlayerReady,
  					'onStateChange': onPlayerStateChange
  				}
  			});
  		}
function onPlayerReady(event) {
}

function onPlayerStateChange(event) {
	if (event.data === 0) {
		setTimeout(function(){
			player.pauseVideo();
		},1000);
		$('#gameScreen').show();
		$('.sound-play').show()
		$('.player').hide();
		$('#currentWord').hide();
		$('#keyboard').show();
	}
}

$('.sound-play').on('click', function(){
	$('.sound-play').hide()
	document.getElementById('whole-word-sound').play();
	document.getElementById('whole-word-sound').play();
	setTimeout(function(){
		$('#currentWord').show()
	},500);
});

function displayWordChosen(){
	chosenWord = listOfWords[wordIndex].toUpperCase()
			for(i=0; i<chosenWord.length; i++){
				$('#currentWord p').append(chosenWord[i]);
				$('#underlineText p').append("_ ");
			};
			var chosenWordLowercase = chosenWord.toLowerCase();
			$('#whole-word-sound').attr('src', 'audio/'+chosenWordLowercase+'.mp4');
			
};
displayWordChosen();
var matchingLetter = 0

$('#keyboard li').on('click', function(){
	var button = $(this).text()
	$('#inputText p').append(button)
	if(button === chosenWord[matchingLetter]){
		matchingLetter = ++matchingLetter
	}else{
		setTimeout(function(){
			var correctLetters = $('#inputText p').text().slice(0,-1)
			    $('#inputText p').remove()
			    $('#inputText').append('<p>'+correctLetters+'</p>')
		},500);
	}
	if(matchingLetter === chosenWord.length){
		document.getElementById('whole-word-sound').play();
		setTimeout(function(){
			$('#inputText p').remove()
			$('#inputText').append('<p></p>')
			$('#currentWord p').remove()
			$('#currentWord').append('<p></p>')
			$('#underlineText p').remove()
			$('#underlineText').append('<p></p>')
			matchingLetter = 0
			wordIndex = ++wordIndex;
			$('#gameScreen').toggle();
			$('.player').toggle();
			player.setShuffle(true);
			$('#keyboard').hide();
		},1000);
		setTimeout(function(){
			displayWordChosen();
		},3000);
		if(wordIndex === (listOfWords.length-1)){
			wordIndex = 0
		};
	};
})

//shuffle function for shuffling the words
function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}






