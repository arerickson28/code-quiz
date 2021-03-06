let quizQuestionArray = [

        {
        "question": "What does 'scope' refer to when programming?",
        "answer": "op4",
        "options": [
            "a) Methods of fetching data", 
            "b) Tools used for debugging errors", 
            "c) The purpose of the code", 
            "d) Rules about variable availability for use"]
        },
    
        {
        "question": "Which of the following is not a keyword for variable declaration?",
        "answer": "op1",
        "options": [
            "a) make", 
            "b) let", 
            "c) var", 
            "d) const"]
        },
    
        {
        "question": "Can indicies be used to access items in arrays and objects?",
        "answer": "op3",
        "options": [
            "a) Both arrays and objects have indicies",
            "b) Only objects have indicies", 
            "c) Only arrays have indicies", 
            "d) Neither arrays nor objects have indicies"]
        },

        {
        "question": "Which of the following is not a data type?",
        "answer": "op3",
        "options": [
            "a) string", 
            "b) boolean", 
            "c) euclid", 
            "d) number"]
        },

        {
        "question": "Code blocks must always be contained by which of the following?",
        "answer": "op4",
        "options": [
            "a) ( parentheses )", 
            "b) < angle brackets >", 
            "c) [ square brackets ]", 
            "d) { curly brackets }"]
        }
]
//-----------------------------------------------------------------------------
//Populating question box
let startQuizDiv = document.getElementById("startQuiz") ;
let currentQuestion = -1 ;
let correctMsgBox = document.getElementById("correctBox") ;
let correctOrNot = document.getElementById("correctOrNot") ;
let quizSection = document.getElementById("quizSection") ;

function loadNextQuestion() {
    currentQuestion++ ;

    correctOrNot.textContent = "" ;
    
    quizSection.classList.remove("hide") ;
    
    let nextQuestion = document.getElementById("question") ;

    let questionNumber = document.getElementById("questionNumber") ;
    questionNumber.textContent = currentQuestion + 1

    nextQuestion.textContent = quizQuestionArray [currentQuestion]["question"] ;

    //Options
    let opA = document.getElementById("op1") ;
    let opB = document.getElementById("op2") ;
    let opC = document.getElementById("op3") ;
    let opD = document.getElementById("op4") ;

    let elOptions = [opA, opB, opC, opD] ;

    for (var i = 0; i < 4; i++) {
        elOptions[i].textContent = quizQuestionArray[currentQuestion]["options"][i] ;
    }
}
//-----------------------------------------------------------------------------
//Checking to see if user answer is correct
let lastQuestionIsAnswered = false ;
let optionDiv = document.getElementById("optionBox") ;

optionDiv.addEventListener("click", function(event){
    let selected = event.target ;
    let selectedId = selected.getAttribute("id") ;
    
    console.log(selected) ;
    console.log(quizQuestionArray[currentQuestion]["answer"]) ;

    if (selectedId ===  quizQuestionArray[currentQuestion]["answer"]) {
        console.log("correct") ;
        correctOrNot.textContent = "Correct!" ;
        correctMsgBox.classList.remove("hide") ;
       
    } else if (selectedId === "optionBox") {

        return

    } else if (selectedId !==  quizQuestionArray[currentQuestion]["answer"]) {
        console.log("incorrect") ;
        correctOrNot.textContent = "Incorrect." ;
        correctMsgBox.classList.remove("hide") ;
        //deduct time from timer
        secondsLeft -= 5 ;
     
    } 

    console.log(currentQuestion) ;

    if (currentQuestion === quizQuestionArray.length - 1) {
        lastQuestionIsAnswered = true ;
    }

    wait() ;

}) ;
//-----------------------------------------------------------------------------
//Wait to display next question
let formDiv = document.getElementsByClassName("form") ;
function wait() {

    let waitTime = 1

    let wait = setInterval(function() {
        waitTime-- ;
        
        if (waitTime === 0) {
            clearInterval(wait) ;
            correctMsgBox.setAttribute("class", "hide")

            if (currentQuestion !== quizQuestionArray.length - 1) {
                loadNextQuestion() ;
            }  else {
                quizSection.setAttribute("class", "hide") ;
                formDiv[0].classList.remove("hide") ;
            }
        }
    }, 1000) ;
}
//-----------------------------------------------------------------------------
//At end of quiz...
let userInitials = "";
let userScore = 0 ;
//get user data
    if (localStorage.getItem("userData") === null) {
        let userData = [] ;
        localStorage.setItem("userData", JSON.stringify(userData)) ;
    }

let submitInitials = document.getElementById("getInitials") ;

submitInitials.addEventListener("click", function() {

    userInitials = document.getElementById("userInitials").value  ;

    //In the event the submit button is pressed without the user having entered initials
    if (userInitials === "") {
        return
    }

    userData = JSON.parse(localStorage.getItem("userData")) ;

    newEntryObj = {
        "userInitials" : userInitials,
        "userScore": userScore
        }

    userData.push(newEntryObj) ;

    console.log(userData) ;

    localStorage.setItem("userData", JSON.stringify(userData)) ;

    document.getElementById("userInitials").value = "" ;
    formDiv[0].setAttribute("class", "hide") ;
}) ;

//-----------------------------------------------------------------------------
//Connecting startButton to timer
let startButton = document.getElementById("startButton") ;

startButton.addEventListener("click", function() {
    startTimer() ;
})

//-----------------------------------------------------------------------------
//Timer stuff
let secondsLeft = 61 ;
let finalScore = document.getElementById("finalScore") ;
function startTimer() {
    let timerEl = document.getElementById("timer") ;
    
    let timer = setInterval(function() {
        secondsLeft-- ;
        timerEl.textContent = secondsLeft ;
        
        if (secondsLeft === 0 || lastQuestionIsAnswered) {
            clearInterval(timer) ;
            finalScore.textContent = secondsLeft ;
            userScore = secondsLeft ;
        }

    }, 1000) ;

    startQuizDiv.setAttribute('class', 'hide')
    loadNextQuestion() ;

}
