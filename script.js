let quizQuestionArray = [

        {
        "question": "What does 'scope' refer to when programming?",
        "answer": "op4",
        "options": [
            "a) Methods of fetching data", 
            "Tools used for debugging errors", 
            "The purpose of the code", 
            "Rules about variable availability for use"]
        },
    
        {
        "question": "Which of the following is not a keyword for variable declaration?",
        "answer": "op1",
        "options": [
            "make", 
            "let", 
            "var", 
            "const"]
        },
    
        {
        "question": "Can indicies be used to access items in arrays and objects?",
        "answer": "op3",
        "options": [
            "Both arrays and objects have indicies",
            "Only objects have indicies", 
            "Only arrays have indicies", 
            "Neither arrays nor objects have indicies"]
        },

        {
        "question": "Which of the following is not a data type?",
        "answer": "op3",
        "options": [
            "string", 
            "boolean", 
            "euclid", 
            "number"]
        },

        {
        "question": "Code blocks must always be contained by which of the following?",
        "answer": "op4",
        "options": [
            "(parentheses)", 
            "<angle brackets>", 
            "[square brackets]", 
            "{curly brackets}"]
        }
]
//-----------------------------------------------------------------------------
//Populating question box
let startQuizDiv = document.getElementById("startQuiz") ;
let currentQuestion = 0 ;
let correctMsg = document.getElementById("correct") ;

function loadNextQuestion() {
        //Question
    correctMsg.innerHTML = ""
    
    
    let quizSection = document.getElementById("quizSection") ;

    quizSection.classList.remove("hide") ;
    
    // let questionDiv = document.getElementById("questionBox") ;

    let nextQuestion = document.getElementById("question") ;
    //^hard code this then just rewrite

    // questionDiv.appendChild(nextQuestion) ;

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

    //-----------------------------------------------------------------------------
    //Checking to see if correct answer
    let optionDiv = document.getElementById("optionBox")

    optionDiv.addEventListener("click", function(event){
        let selected = event.target ;
        let selectedId = selected.getAttribute("id") ;
        
        let horRul = document.createElement("hr") ;
        let correct = document.createElement("h3") ;
        let incorrect = document.createElement("h3") ;
        correct.textContent = "Correct!"
        incorrect.textContent = "Incorrect."
        
        console.log(selected) ;

        if (selectedId ===  quizQuestionArray[currentQuestion]["answer"]) {
            console.log("correct") ;
            //display correct sign.....for 1 second?
            correctMsg.appendChild(horRul) ;
            correctMsg.appendChild(correct) ;
            //function wait()

        } else {
            console.log("incorrect") ;
            //display incorrect sign...for 1 second?
            //deduct time from timer
            correctMsg.appendChild(horRul) ;
            correctMsg.appendChild(incorrect) ;

        }
        console.log(currentQuestion) ;
        currentQuestion++ ;
        console.log(currentQuestion) ;

        loadNextQuestion() ;

    }) ;
}



function wait() {
    // interval 
    // when interval === 0 then loadNextQuestion() 
}







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
    let secondsLeft = 21 ;

    let timer = setInterval(function() {
        secondsLeft-- ;
        timerEl.textContent = secondsLeft ;
        
        
        if (secondsLeft === 0) {
            clearInterval(timer) ;
        }

    }, 1000) ;

    startQuizDiv.setAttribute('class', 'hide')
    loadNextQuestion() ;
    //TODO: Need to disable start button while quiz is running
    //display none for start button

}
