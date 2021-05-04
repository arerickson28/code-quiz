let quizQuestionArray = [

        {
        "question": "Hello, this is question one!",
        "options": ["Hello, this is option one of question one!", "Hello, this is option two of question one!", "Hello, this is option three of question one!", "Hello, this is option four of question one!"],
         "answer": "letter1"
        },
    
        {
        "question": "Hello, this is question two!",
        "options": ["options2-1", "options2-2", "options2-3", "options2-4"],
        "answer": "letter2"
        },
    
        {
        "question": "Hello, this is question three!",
        "options": ["options3-1", "options3-2", "options3-3", "options4-4"],
        "answer": "letter3"
        },

        {
        "question": "Hello, this is question four!",
        "options": ["options4-1", "options4-2", "options4-3", "options4-4"],
        "answer": "letter4"
            },

        {
        "question": "Hello, this is question five!",
        "options": ["options5-1", "options5-2", "options5-3", "options5-4"],
        "answer": "letter5"
        }
]
//-----------------------------------------------------------------------------
//Populating question box

let currentQuestion = 0 ;

    //Question
let questionDiv = document.getElementById("questionBox") ;

let nextQuestion = document.createElement("h3") ;

questionDiv.appendChild(nextQuestion) ;

nextQuestion.textContent = quizQuestionArray[0]["question"] ;

    //Options
let opA = document.getElementById("op1") ;
let opB = document.getElementById("op2") ;
let opC = document.getElementById("op3") ;
let opD = document.getElementById("op4") ;

let elOptions = [opA, opB, opC, opD] ;

for (var i = 0; i < 4; i++) {
    elOptions[i].textContent = quizQuestionArray[currentQuestion]["options"][i] ;
}

//-----------------------------------------------------------------------------

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


if (isQuizFinished === false) {
    //TODO: display initial form box
}

userData = {
    "userInitials" : userInitials,
    "userScore": userScore
}

//-----------------------------------------------------------------------------
//Connecting startButton to timer
let startButton = document.getElementById("startButton") ;

startButton.addEventListener("click", function() {
    startTimer() ;
})

//-----------------------------------------------------------------------------
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
