let userInitials = localStorage.getItem("initials") ;


let highDiv = document.getElementById("highscoreTable") ;

let newUser = document.createElement("tr") ;

let newUserStat = document.createElement("td") ;

newUserStat.textContent = userInitials ;

highDiv.appendChild(newUser) ;

newUser.appendChild(newUserStat) ;




