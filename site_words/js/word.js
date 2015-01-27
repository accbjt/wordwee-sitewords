// 2. This code loads the IFrame Player API code asynchronously.
$(document).foundation();
// var tag = document.createElement('script'),
//     player;

// var wordPicked = ['see','my','to','and','go'];
// var json_str = JSON.stringify(wordPicked);
// createCookie('mycookie', json_str);

var listOfWords = ['see','my','to','and','go','is','said','the','for','play','can','you','me','it','big','in','we','not','down','where','little','help','like','have','she','are','was','he','they','with','on','this','at','what','do','no','want','who','but','a','up','his','him','had','yes'],
	wordIndex = 0,
	videoIndex = 0,
	playerButton = $('span.player a'),
	level=0

// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

shuffle(listOfWords);

// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player('player', {
// 		height: '300',
// 		width: '100',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMhPErayo5hjHxlTWyNsCAmA'], index: String(Math.floor(Math.random() * 82) + 1)},
// 		events: {
// 			'onReady': onPlayerReady,
// 			'onStateChange': onPlayerStateChange
// 		}
// 	});

// 	player2 = new YT.Player('player2', {
// 		height: '300',
// 		width: '500',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PLF7D6D82DC1148673'], index: String(Math.floor(Math.random() * 5) + 1)},
// 		events: {
// 			'onReady': onPlayerReady2,
// 			'onStateChange': onPlayerStateChange2
// 		}
// 	});

// 	player3 = new YT.Player('player3', {
// 		height: '300',
// 		width: '500',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PLD1A982F8D26AA80E'], index: String(Math.floor(Math.random() * 10) + 1)},
// 		events: {
// 			'onReady': onPlayerReady3,
// 			'onStateChange': onPlayerStateChange3
// 		}
// 	});
// 	player4 = new YT.Player('player4', {
// 		height: '300',
// 		width: '100',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMjYrkpiSKI6RfAHPiwX_nAh'], index: String(Math.floor(Math.random() * 30) + 1)},
// 		events: {
// 			'onReady': onPlayerReady4,
// 			'onStateChange': onPlayerStateChange4
// 		}
// 	});

// 	player5 = new YT.Player('player5', {
// 		height: '300',
// 		width: '500',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PL2EeVKSXvjMjUsdASb4u17N0ZDeq-MGIJ'], index: String(Math.floor(Math.random() * 6) + 1)},
// 		events: {
// 			'onReady': onPlayerReady5,
// 			'onStateChange': onPlayerStateChange5
// 		}
// 	});

// 	player6 = new YT.Player('player6', {
// 		height: '300',
// 		width: '500',
// 		videoId: 'videoseries',
// 		playerVars: {'autoplay': 0, 'controls': 1 ,'list':['PLRXl0CbI9TdcVd6RK1VMotJ3RoR5I25RA'], index: String(Math.floor(Math.random() * 30) + 1)},
// 		events: {
// 			'onReady': onPlayerReady6,
// 			'onStateChange': onPlayerStateChange6
// 		}
// 	});
// }

// function onPlayerReady(event) {
// 	event.target.setShuffle(true);
// }

function resetPlayer(){
		$('#gameScreen').show();
		$('.sound-play').show()
		$('.player').hide().css('margin-top', '60px')
		$('#currentWord p').show();
		$('#underlineText').show();
		$('#keyboard').show();
		playerButton.css('z-index', '-1');
		$('span').show();
		$('iframe').attr('height','300px').css('width', '30%');
};

// function onPlayerStateChange(event) {
// 	if (event.data === 0) {
// 		setTimeout(function(){
// 			player.pauseVideo();
// 			resetPlayer();
// 		},4000);
// 	};
// }
// function onPlayerReady2(event) {
// 	event.target.setShuffle(true);
// }

// function onPlayerStateChange2(event) {
// 	if (event.data === 1){
// 		var timer = setTimeout(function(){
// 			player2.pauseVideo();
// 		},240000);
// 	};
// 	if(event.data === 2) {
// 		clearTimeout(timer);
// 		resetPlayer();
// 	};
// }
// function onPlayerReady3(event) {
// 	event.target.setShuffle(true);
// }

// function onPlayerStateChange3(event) {
// 	if (event.data === 0) {
// 		setTimeout(function(){
// 			player3.pauseVideo();
// 			resetPlayer();
// 		},4000);
// 	};
// 	// if (event.data === 1){
// 	// 	var timer = setTimeout(function(){
// 	// 		player3.pauseVideo();
// 	// 	},240000);
// 	// };
// 	// if(event.data === 2) {
// 	// 	clearTimeout(timer);
// 	// 	resetPlayer();
// 	// };
// }
// function onPlayerReady4(event) {
// 	event.target.setShuffle(true);
// }

// function onPlayerStateChange4(event) {
// 	if (event.data === 0) {
// 		setTimeout(function(){
// 			player4.pauseVideo();
// 			resetPlayer();
// 		},4000);
// 	};
// }
// function onPlayerReady5(event) {
// 	event.target.setShuffle(true);
// }

// function onPlayerStateChange5(event) {
// 	if (event.data === 1){
// 		var timer = setTimeout(function(){
// 			player5.pauseVideo();
// 		},240000);
// 	};
// 	if(event.data === 2) {
// 		clearTimeout(timer);
// 		resetPlayer();
// 	};
// }
// function onPlayerReady6(event) {
// 	event.target.setShuffle(true);
// }

// function onPlayerStateChange6(event) {
// 	if (event.data === 1){
// 		var timer = setTimeout(function(){
// 			player6.pauseVideo();
// 		},240000);
// 	};
// 	if(event.data === 2) {
// 		clearTimeout(timer);
// 		resetPlayer();
// 	};
// }

$('.sound-play').on('click', function(){
	$('.sound-play').hide()
	document.getElementById('whole-word-sound').play();
	document.getElementById('whole-word-sound').play();
	setTimeout(function(){
		$('#currentWord').show()
	},500);
});

function displayWordChosen(){
	$('#currentWord p').empty();
	$('#matchFullWord li a').empty()
	$('#underlineText p').empty();
	chosenWord = listOfWords[wordIndex].toUpperCase()
			for(i=0; i<chosenWord.length; i++){
				$('#currentWord p').append(chosenWord[i]);
				$('#underlineText p').append("_ ");
			};
			var chosenWordLowercase = chosenWord.toLowerCase();
			$('#whole-word-sound').attr('src', 'audio/'+chosenWordLowercase+'.mp4');
			
};
displayWordChosen();
var matchingLetter = 0,
	wrongLetter = 0

$('#keyboard li').on('click', function(){
	var button = $(this).text()
	$('#inputText p').append(button)
	if(button === chosenWord[matchingLetter]){
		matchingLetter = ++matchingLetter
		wrongLetter = 0
	}else{
		setTimeout(function(){
			var correctLetters = $('#inputText p').text().slice(0,-1)
			    $('#inputText p').remove()
			    $('#inputText').append('<p>'+correctLetters+'</p>')
		},500);
		if(level === 3){
			document.getElementById('whole-word-sound').play();
			wrongLetter = ++wrongLetter
			console.log('wrong letter '+wrongLetter)
			if (wrongLetter === 4){
				$('#currentWord').css('visibility','visible');
				level = 0
				wrongLetter = 0
			}
		}
	}
		console.log('original= '+chosenWord)
	if(matchingLetter === chosenWord.length){
		setTimeout(function(){
			$('#inputText p').remove()
			$('#inputText').append('<p></p>')
			$('#currentWord').hide();
			$('#underlineText').hide();
			matchingLetter = 0
			if(level === 3){
				$('#gameScreen').show();
				$('.player').show();
				$('#keyboard').hide();
				setTimeout(function(){
					displayWordChosen();
				},3000);
				$('#currentWord p').hide();
				$('#matchFullWord').hide();
				$( "#matchFullWord li" ).unbind( "click");
				level = 0
				wordIndex = ++wordIndex;
				$('#currentWord').css('visibility','visible');
			}else{
				level = 2
				level2()
			}
		},1000);
		if(wordIndex === (listOfWords.length-1)){
			wordIndex = 0
		};
	};
})

function level2(){
	console.log(listOfWords)
	console.log(wordIndex)
    var	l2ListOfWords = [],
    	wordIndexPlus = wordIndex+4
    	console.log(wordIndexPlus)
	for(i = wordIndex; i < wordIndexPlus; i++){
		l2ListOfWords.push(listOfWords[i])
	};
	console.log(l2ListOfWords)
	shuffle(l2ListOfWords);
	$('#matchFullWord li:nth-child(1) a').append(l2ListOfWords[0])
	$('#matchFullWord li:nth-child(2) a').append(l2ListOfWords[1])
	$('#matchFullWord li:nth-child(3) a').append(l2ListOfWords[2])
	$('#matchFullWord li:nth-child(4) a').append(l2ListOfWords[3])
	$('#matchFullWord').show();
	$('#keyboard').hide();
	setTimeout(function(){
		document.getElementById('whole-word-sound').play();
	}, 500)
	$( "#matchFullWord li" ).bind( "click");
	$('#matchFullWord li').on('click', function(){ 
		var word = $(this).children().text().toUpperCase();
			if(word === chosenWord){
				level = 3
				level3();
			}else{
				shuffle(l2ListOfWords);
				console.log("wrong = "+l2ListOfWords)
				$('#keyboard').show();
				$('#matchFullWord').hide()
				$('#currentWord').show();
				$('#underlineText').show();
				$('#matchFullWord li a').empty();
				document.getElementById('whole-word-sound').play();
				$( "#matchFullWord li" ).unbind( "click");
			};
		});
};

function level3(){
	console.log('level3')
	$('#keyboard').show();
	$('#underlineText').show()
	$('#currentWord p').show()
	$('#matchFullWord').hide();
	$('#matchFullWord li a').empty()
	$( "#matchFullWord li" ).unbind( "click");
	document.getElementById('whole-word-sound').play();
	$('#currentWord').css('visibility', 'hidden').show();
}

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

// $('.player span').on('click', 'a', function() {
// 		$(this)
// 			.next()
// 				$(this).parent().siblings().hide();
// 				playerButton.css('z-index', '-1');
// 				$('iframe').css('width', '100%');
// 				$('iframe').attr('height', '720px');
// 				$('.player').css('margin-top', '10px')
// 			});



