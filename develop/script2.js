let userData = JSON.parse(localStorage.getItem("userData")) ;

//--------
//Sort userData by descending userScore
let temp = userData ;
userData = [] ;
console.log(userData) ;
let listOfScores = [] ;

for (user of temp) {
    listOfScores.push(user["userScore"])
}

let sortedScores = listOfScores.sort(function(a, b){return b-a}) ;
console.log(sortedScores) ;

for (score of sortedScores) {
    for (obj of temp) {
        if (obj.userScore === score) {
            userData.push(obj) ;
        }
    }
}

//-------------------------
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
   
    let tableRows = document.getElementsByClassName("tableRow") ;

    // for (var i = 0; i < tableRows.length; i++) {
    //     tableRows[i].parentNode.removeChild(tableRows[i]) ;
    // }

    for (row of tableRows) {
        console.log("tr", row.parentNode);
       // row.parentNode.removeChild(row) ;
    }

    console.log(tableRows) ;

    // userData = JSON.parse(localStorage.getItem("userData")) ;

    userData = [] ;
    localStorage.setItem("userData", JSON.stringify(userData)) ;
    // localStorage.setItem("userData", JSON.stringify([])) ;
    window.location.reload();


})




