let userInitials = localStorage.getItem("initials") ;


let highDiv = document.getElementById("highscoreTable") ;

let newUser = document.createElement("tr") ;

newUser.setAttribute("class", "tableRow")

let newUserStat = document.createElement("td") ;

newUserStat.textContent = userInitials ;

highDiv.appendChild(newUser) ;

newUser.appendChild(newUserStat) ;

// Clear Button
let clearButton = document.getElementById("clear") ;

clearButton.addEventListener("click", function(){
    let highscoreTable = document.getElementById("highscoreTable") ;
    highscoreTable.parentNode.removeChild(highscoreTable) ;
    // Maybe use "getElementsByClassName"?
    //https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
})




