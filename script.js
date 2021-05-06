let quizQuestionArray = [

        {
        "question": "Hello, this is question one!",
        "answer": "letter1",
        "options": [
            "Hello, this is option one of question one!", 
            "Hello, this is option two of question one!", 
            "Hello, this is option three of question one!", 
            "Hello, this is option four of question one!"]
        },
    
        {
        "question": "Hello, this is question two!",
        "answer": "letter2",
        "options": [
            "options2-1", 
            "options2-2", 
            "options2-3", 
            "options2-4"]
        },
    
        {
        "question": "Hello, this is question three!",
        "answer": "letter3",
        "options": [
            "options3-1",
            "options3-2", 
            "options3-3", 
            "options4-4"]
        },

        {
        "question": "Hello, this is question four!",
        "answer": "letter4",
        "options": [
            "options4-1", 
            "options4-2", 
            "options4-3", 
            "options4-4"]
        },

        {
        "question": "Hello, this is question five!",
        "answer": "letter5",
        "options": [
            "options5-1", 
            "options5-2", 
            "options5-3", 
            "options5-4"]
        }
]
//-----------------------------------------------------------------------------
//Populating question box

let currentQuestion = 0 ;

    //Question
let questionDiv = document.getElementById("questionBox") ;

let nextQuestion = document.createElement("h3") ;

questionDiv.appendChild(nextQuestion) ;

nextQuestion.textContent = quizQuestionArray[currentQuestion]["question"] ;

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
//Checking to see if correct answer
let optionDiv = document.getElementById("optionBox")

optionDiv.addEventListener("click", function(event){
    let selected = event.target ;
    let selectedId = selected.getAttribute("id") ;
    
    if (selectedId ===  quizQuestionArray[currentQuestion]["answer"]) {
        console.log("correct") ;
    } else {
        console.log("incorrect") ;
    }


}) ;









//At end of quiz...
let userInitials = "";
let userScore = 0 ;



// let userData ;



    if (localStorage.getItem("userData") === null) {
        let userData = [] ;
        localStorage.setItem("userData", JSON.stringify(userData)) ;

    }


// let isQuizFinished = true ;

let submitInitials = document.getElementById("getInitials") ;

submitInitials.addEventListener("click", function() {

    // if (typeof(userData) === "undefined") {
    //     userData = [] ;
    //     localStorage.setItem("userData", JSON.stringify(userData)) ;
    // }

    userInitials = document.getElementById("userInitials").value  ;
    userData = JSON.parse(localStorage.getItem("userData")) ;

    newEntryObj = {
        "userInitials" : userInitials,
        "userScore": userScore
        }

    userData.push(newEntryObj) ;

    localStorage.setItem("userData", JSON.stringify(userData)) ;

    // localStorage.setItem("initials", userInitials) ;

    document.getElementById("userInitials").value = "" ;
}) ;


// if (isQuizFinished === false) {
//     //TODO: display initial form box
// }


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
