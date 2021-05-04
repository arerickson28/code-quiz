let quizQuestionObject = {

    "question1": {
        "options1": ["options1-1", "options1-2", "options1-3", "options1-4"],
         "answer1": "letter1"
        },
    
    "question2": {
        "options2": ["options2-1", "options2-2", "options2-3", "options2-4"],
        "answer2": "letter2"
            },
    
    "question3": {
        "options3": ["options3-1", "options3-2", "options3-3", "options4-4"],
        "answer3": "letter3"
        },

    "question4": {
        "options4": ["options4-1", "options4-2", "options4-3", "options4-4"],
        "answer4": "letter4"
            },

    "question5": {
        "options5": ["options5-1", "options5-2", "options5-3", "options5-4"],
        "answer5": "letter5"
            }
}

//At end of quiz...
let userInitials = "";
console.log(typeof(userInitials))
let userScore ;

let userData = {
    "userInitials" : userInitials,
    "userScore": userScore
}

let isQuizFinished = true ;

let submitInitials = document.getElementById("getInitials") ;

submitInitials.addEventListener("click", function() {
    userInitials = document.getElementById("userInitials").value  ;
    console.log(userInitials) ;
    localStorage.setItem("initials", userInitials) ;
    document.getElementById("userInitials").value = "" ;
}) ;

console.log(typeof(userInitials)) ;



//getInitials function?

if (isQuizFinished === false) {
    //TODO: display initial form box


}


userData = {
    "userInitials" : userInitials,
    "userScore": userScore
}


//Connecting startButton to timer
let startButton = document.getElementById("startButton") ;

startButton.addEventListener("click", function() {
    startTimer() ;
})


//Timer stuff
function startTimer() {
    let timerEl = document.getElementById("timer") ;
    let secondsLeft = 6 ;

    let timer = setInterval(function() {
        secondsLeft-- ;
        timerEl.textContent = secondsLeft ;
        
        
        if (secondsLeft === 0) {
            clearInterval(timer) ;
        }

    }, 1000) ;

    //TODO: Need to disable start button while quiz is running

}
