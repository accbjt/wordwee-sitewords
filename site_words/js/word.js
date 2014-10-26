// 2. This code loads the IFrame Player API code asynchronously.
$(document).foundation();
var tag = document.createElement('script'),
    player;


var listOfWords = ['see','my','to','and','go','is','said','the','for','play','can','you','me','it','big','in','we','not','down','where','little','help','like','have','she','are','was','he','they','with','on','this','at','what','do','no','want','who','but','a','up','his','him','had','yes'],
	wordIndex = 0,
	videoIndex = 0,
	playerButton = $('span.player a');

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

shuffle(listOfWords);

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '300',
		width: '100',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMhPErayo5hjHxlTWyNsCAmA'], index: String(Math.floor(Math.random() * 82) + 1)},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});

	player2 = new YT.Player('player2', {
		height: '300',
		width: '500',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMgaeelOwF7Cr_8JLSWnoPZW'], index: String(Math.floor(Math.random() * 2) + 1)},
		events: {
			'onReady': onPlayerReady2,
			'onStateChange': onPlayerStateChange2
		}
	});

	player3 = new YT.Player('player3', {
		height: '300',
		width: '500',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMj5JkChuZsIG9rNG_r4l6GJ'], index: '1'},
		events: {
			'onReady': onPlayerReady3,
			'onStateChange': onPlayerStateChange3
		}
	});
	player4 = new YT.Player('player4', {
		height: '300',
		width: '100',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMjYrkpiSKI6RfAHPiwX_nAh'], index: String(Math.floor(Math.random() * 30) + 1)},
		events: {
			'onReady': onPlayerReady4,
			'onStateChange': onPlayerStateChange4
		}
	});

	player5 = new YT.Player('player5', {
		height: '300',
		width: '500',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMjUsdASb4u17N0ZDeq-MGIJ'], index: String(Math.floor(Math.random() * 7) + 1)},
		events: {
			'onReady': onPlayerReady5,
			'onStateChange': onPlayerStateChange5
		}
	});

	player6 = new YT.Player('player6', {
		height: '300',
		width: '500',
		videoId: 'videoseries',
		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMiopQK16KKJRih8vZxV7R7s'], index: String(Math.floor(Math.random() * 2) + 1)},
		events: {
			'onReady': onPlayerReady6,
			'onStateChange': onPlayerStateChange6
		}
	});
}

function onPlayerReady(event) {
	event.target.setShuffle(true);
}

function resetPlayer(){
		$('#gameScreen').show();
		$('.sound-play').show()
		$('.player').hide()
		$('#currentWord').hide();
		$('#keyboard').show();
		playerButton.css('z-index', '-1');
		$('span').show();
		$('iframe').attr('height','300px').css('width', '30%');
};

function onPlayerStateChange(event) {
	if (event.data === 0) {
		setTimeout(function(){
			player.pauseVideo();
		},1000);
		resetPlayer();
	};
}
function onPlayerReady2(event) {
	event.target.setShuffle(true);
}

function onPlayerStateChange2(event) {
	if (event.data === 1){
		var timer = setTimeout(function(){
			player2.pauseVideo();
		},240000);
	};
	if(event.data === 2) {
		clearTimeout(timer);
		resetPlayer();
	};
}
function onPlayerReady3(event) {
	event.target.setShuffle(true);
}

function onPlayerStateChange3(event) {
	if (event.data === 1){
		var timer = setTimeout(function(){
			player3.pauseVideo();
		},240000);
	};
	if(event.data === 2) {
		clearTimeout(timer);
		resetPlayer();
	};
}
function onPlayerReady4(event) {
	event.target.setShuffle(true);
}

function onPlayerStateChange4(event) {
	if (event.data === 0) {
		setTimeout(function(){
			player4.pauseVideo();
		},1000);
		resetPlayer();
	};
}
function onPlayerReady5(event) {
	event.target.setShuffle(true);
}

function onPlayerStateChange5(event) {
	if (event.data === 1){
		var timer = setTimeout(function(){
			player5.pauseVideo();
		},240000);
	};
	if(event.data === 2) {
		clearTimeout(timer);
		resetPlayer();
	};
}
function onPlayerReady6(event) {
	event.target.setShuffle(true);
}

function onPlayerStateChange6(event) {
	if (event.data === 1){
		var timer = setTimeout(function(){
			player6.pauseVideo();
		},240000);
	};
	if(event.data === 2) {
		clearTimeout(timer);
		resetPlayer();
	};
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
};

$('.player span').on('click', 'a', function() {
		$(this)
			.next()
				$(this).parent().siblings().hide();
				playerButton.css('z-index', '-1');
				$('iframe').css('width', '100%');
				$('iframe').attr('height', '720px');
				$('.player').css('margin-top', '0px')
			});



