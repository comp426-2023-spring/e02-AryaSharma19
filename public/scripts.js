// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


var opponent = false;
const moves = ["rock", "paper", "scissors", "lizard", "spock"];
var rps = true;
var move = "";

//fetch('/app/rps').then(response => response.json()).then(data => {
    //console.log(data);
//});
 

function playgamefromrpsorrpsls(index) {
    move = moves[index]
    
}

function firstsubmit() {
    if (opponent) {
        document.getElementById("opponent-and-game").hidden = true;
        document.getElementById("rps-input").hidden = false;
    } else {
        
        
        
        
        
        document.getElementById("opponent-and-game").hidden = true;
        document.getElementById("results").hidden = false;
    }
}


function secondsubmit() {


    document.getElementById("rps-input").hidden = true;
    document.getElementById("results").hidden = false;
}



function playingrps() {
    rps = !rps;
}

function playingopponent() {
    opponent = !opponent;
}

function startOver() {
    rps = true;
    opponent = false;
    move = "";


    document.getElementById("results").innerHTML = "";
    document.getElementById("rps-input").reset();
    document.getElementById("opponent-and-game").reset();
    document.getElementById("results").hidden = true;
    document.getElementById("rps-input").hidden = true;
    document.getElementById("opponent-and-game").hidden = false;
}
