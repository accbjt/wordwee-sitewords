var data = {};
var hits_correct = 0;
var hits_wrong = 0;
var start_time = 0;

data.words =["Chimpanzee","Rhinoceros", "Banana", "Dog", "Cat", "Car", "Baby", "Milk", "Spider", "Diaper"];
data.picked =[];
data.consecutive = 5;
data.button_length = 3;

//shuffle data.words and shuffles it. Then picks the first 3 arrays and
//pushes it to the data.picked array

function getWords(){
	shuffle(data.words);
	for(var i=0;i<3;i++){
    data.picked.push(data.words[i]);
   }
}

getWords();
//console.log(data.picked);
var chosenWord = data.picked[Math.floor(Math.random()*data.picked.length)];
var shuffledWords = shuffle(data.picked);

//display word on page

$("div.displayWord").html(
        '<video width="640" height="264">' +
        '<source src=./videos/'+chosenWord +'.mp4 type="video/mp4"></source>' +
        '<source src=./videos/'+chosenWord +'.ogv type="video/ogv"></source>' +
        '<source src=./videos/'+chosenWord +'.webm type="video/webm"></source>' +
        '</video>');

$('.displayWord video').on('click', function(){
    $(this).trigger('play');
});

function mixWords(){

        $('a.firstButton').text(shuffledWords[0]);

        $('a.secondButton').text(shuffledWords[1]);

        $('a.thirdButton').text(shuffledWords[2]);

//     console.log(shuffledWords)
}

mixWords();

setTimeout(function () {
     $('a.btn').css('visibility', 'visible');
}, 25000);

(function(){
    var button = $('a.btn'),
        winWidth     = $(window).width() / 2 - button.width() / 2,
        winHeight    = $(window).height() / 2 - button.height() / 2;

    button.on('click',function(){
        var audio = new Audio('./audio/'+this.text+'.wav'),
            correct = new Audio('./audio/correct.wav'),
            wrong = new Audio('./audio/nodear.wav');

        if (this.text === chosenWord) {
            audio.play();
            setTimeout(function () {
                correct.play();
            }, 1300,$(this).animate({
                'fontSize':  '+=20',
                'width':  '+=150',
                'height':  '+=50',
                'left': -20
            }), setTimeout(function() {
                    window.location.href = "./videoPages/"+chosenWord+".html"
                }, 8000)
            );
        }else {
            audio.play();
            setTimeout(function () {
                wrong.play();
            }, 1300,setTimeout(function() {
                window.location.href = "./game.html"
            }, 4000));
            $(this).css({'visibility':'hidden'});
        }
    });
})();

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

//window.setTimeout(function(){
//    $('a.firstButton').css('visibility','visible');
//    $('a.secondButton').css('visibility','visible');
//    $('a.thirdButton').css('visibility','visible');
//}, 25000);