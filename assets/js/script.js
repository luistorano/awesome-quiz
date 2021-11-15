// Variables
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var userName = document.querySelector('username');
var saveScoreBtn = document.querySelector('saveScoreBtn');
var finalScore = document.querySelector('finalScore');
var mostRecentScore = document.querySelectorAll('mostRecentScore');


var alertButton = document.getElementById('#alert');


// Timer, Count, Question Variables
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');
var submitScore = document.querySelector('submit-btn');

// When Selected Answer, Go To Next Question
qaAnsRow.forEach( function(qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function() {
            step();
            duration =20;
        }, 500)

        // If you answer question righ or wrong, Increase or decrease points
        var valid = this.getAttribute('valid');
        if(valid == 'valid') {
            scoreCount +=20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
});


// Functions
function step() {
    count += 1;

    for(var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 5) {
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
};

// Timer Function. If timer reaches 0, it goes to the next question
var durationTime = setInterval(function() {
    if(duration == 0) {
        duration = 21;
    }
    duration -= 1;
    countdown.innerHTML= duration;
    if(countdown.innerHTML == '0') {
        step()
    }

}, 1000);


function timer() {
    var sec = 20;
    var timer = setInterval(function(){
        document.getElementById('countdown').innerHTML='00' + sec;
        sec--;
        if(sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


// High Score Function




localStorage.setItem(userName, finalScore);