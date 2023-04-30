// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var opponent = false;
const moves = ["rock", "paper", "scissors", "lizard", "spock"];

//fetch('/app/rps').then(response => response.json()).then(data => {
    //console.log(data);
//});
 

function playgamefromrpsorrpsls(index) {
    move = moves[index]
    window.location.href = 'results.html';
}

function returnresults() {
    console.log(game);
    console.log("rps");
    console.log(rps);
    console.log("rpsls");
    console.log(rpsls);
    return game;
}

function playingrps() {
    if (opponent) {
        window.location.href = 'moverps.html';
    }
    else {
        window.location.href = 'results.html';
    }
}

function playingrpsls() {
    if (opponent) {
        window.location.href = 'moverpsls.html';
    }
    else {
        window.location.href = 'results.html';
    }
}


function playingopponent() {
    opponent = !opponent;
    console.log(opponent);
    var element = document.getElementById("my-div");
    var otherelement = document.getElementById("other-div");
    element.hidden = !element.hidden;
    otherelement.hidden = !otherelement.hidden;
}


function startOver() {
    console.log("Need to work on this")
    window.location.href = 'index.html';
}
