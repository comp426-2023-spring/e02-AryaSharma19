// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var rps = true;
var rpsls = false;
var opponent = false;
moves = ["rock", "paper", "scissors", "lizard", "spock"];
move = "rock"
game = "testing aha ahah"


function returnresults() {
    return game;
}



function playGame() {
    console.log("aha")
    fetch('/app/rps').then(response => response.json()).then(data => {
        console.log(data);
  });
  if (opponent && rps) {
    window.location.href = 'moverps.html';
  }
  else if (opponent && rpsls) {
    window.location.href = 'moverpsls.html';
  }
  else {
    
    window.location.href = 'results.html';
  }
}

function playgamefromrpsorrpsls() {
    window.location.href = 'results.html';
}



function playingrps() {
    rps = true;
    rpsls = false;
    console.log(rps);
    console.log(rpsls);
}

function playingrpsls() {
    rps = false;
    rpsls = true;
    console.log(rps);
    console.log(rpsls);
}


function playingopponent() {
    opponent = !opponent;
    console.log(opponent);
}

function startOver() {
    console.log("Need to work on this")
    window.location.href = 'index.html';
}

function pickmove(index) {
    move = moves[index];
    console.log(move);
}
