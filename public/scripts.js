// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var opponent_and_game = document.getElementById("opponent-and-game");
var rps_input = document.getElementById("rps-input");
var rps_button = document.getElementById("rps");
var opponent_button = document.getElementById("opponent");





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

function firstsubmit() {}


function secondsubmit() {}



function playingrps() {
    rps = !rps;
}

function playingopponent() {
    opponent = !opponent;
    
    var element = document.getElementById("my-div");
    var otherelement = document.getElementById("other-div");
    element.hidden = !element.hidden;
    otherelement.hidden = !otherelement.hidden;
}

function startOver() {
    rps = true;
    opponent = false;
    move = "";
    rps_button.checked = true;
    opponent_button.checked = false;
}
