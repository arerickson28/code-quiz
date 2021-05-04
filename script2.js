let userData = JSON.parse(localStorage.getItem("userData")) ;

for (var i = 0; i < userData.length; i++) {
    let scoreTable = document.getElementById("highscoreTable") ;

    let newEntry = document.createElement("tr") ;

    newEntry.setAttribute("class", "tableRow")

    let newEntryInitial = document.createElement("td") ;

    let newEntryScore = document.createElement("td") ;

    newEntryInitial.textContent = userData[i]["userInitials"] ;
    newEntryScore.textContent = userData[i]["userScore"] ;

    scoreTable.appendChild(newEntry) ;

    newEntry.appendChild(newEntryInitial) ;
    newEntry.appendChild(newEntryScore) ;
}

// Clear Button
let clearButton = document.getElementById("clear") ;

clearButton.addEventListener("click", function(){
    let highscoreTable = document.getElementById("highscoreTable") ;
    highscoreTable.parentNode.removeChild(highscoreTable) ;
    // Maybe use "getElementsByClassName"?
    //https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
})




