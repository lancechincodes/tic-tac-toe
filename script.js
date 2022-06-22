// CONSTANT VALUES 
const MAX_TURNS = 9

// STATE VARIABLES
let turn = 'X'
let xPlayer = []
let oPlayer = []
let winnerDeclared = false;

// CACHED ELEMENT REFERENCES
const gridContainer = document.querySelector('.grid-container')
const sq00 = document.querySelector('#sq00')
const sq01 = document.querySelector('#sq01')
const sq02 = document.querySelector('#sq02')
const sq10 = document.querySelector('#sq10')
const sq11 = document.querySelector('#sq11')
const sq12 = document.querySelector('#sq12')
const sq20 = document.querySelector('#sq20')
const sq21 = document.querySelector('#sq21')
const sq22 = document.querySelector('#sq22')
const playerTurn = document.querySelector('#player-turn')
const resetButton = document.querySelector('#reset')
const warningMessage = document.querySelector('#warning-message')


// FUNCTIONS
const resetGame = function() {
    turn = 'X'
    sq00.innerText = ""
    sq01.innerText = ""
    sq02.innerText = ""
    sq10.innerText = ""
    sq11.innerText = ""
    sq12.innerText = ""
    sq20.innerText = ""
    sq21.innerText = ""
    sq22.innerText = ""
    xPlayer = []
    oPlayer = []
    winnerDeclared = false;
    playerTurn.innerText = "It is Player X's turn."
}

const switchTurn = function() {
    if (turn === 'O') {
        turn = 'X'
        playerTurn.innerText = "It is Player X's turn."
    }
    else if (turn === 'X') {
        turn = 'O'
        playerTurn.innerText = "It is Player O's turn."
    }
}

const placeMarker = function(e) {
    if (!e.target.innerText && winnerDeclared === false) { // if square does NOT have text
        if (turn === 'O') {
            e.target.innerText = 'O'
            oPlayer.push(e.target.id)
        }
        else if (turn === 'X') {
            e.target.innerText = 'X'
            xPlayer.push(e.target.id)
        }
        switchTurn()
    }
    else if (winnerDeclared === false) { // if square already has text
        warningMessage.classList.remove('hide')
        setTimeout(() => warningMessage.classList.add('hide'), 1500)
    }
    checkWin()
}

const checkWin = function() {
    if ((oPlayer.includes('sq00') && oPlayer.includes('sq01') && oPlayer.includes('sq02')) || (oPlayer.includes('sq10') && oPlayer.includes('sq11') && oPlayer.includes('sq12')) || (oPlayer.includes('sq20') && oPlayer.includes('sq21') && oPlayer.includes('sq22')) || (oPlayer.includes('sq00') && oPlayer.includes('sq11') && oPlayer.includes('sq22')) || (oPlayer.includes('sq02') && oPlayer.includes('sq11') && oPlayer.includes('sq20')) || (oPlayer.includes('sq00') && oPlayer.includes('sq10') && oPlayer.includes('sq20')) || (oPlayer.includes('sq01') && oPlayer.includes('sq11') && oPlayer.includes('sq21')) || (oPlayer.includes('sq02') && oPlayer.includes('sq12') && oPlayer.includes('sq22')))
    {
        winnerDeclared = true
        playerTurn.innerText = "Player O Wins!"
        setTimeout(resetGame, 3000)
    }
    else if ((xPlayer.includes('sq00') && xPlayer.includes('sq01') && xPlayer.includes('sq02')) || (xPlayer.includes('sq10') && xPlayer.includes('sq11') && xPlayer.includes('sq12')) || (xPlayer.includes('sq20') && xPlayer.includes('sq21') && xPlayer.includes('sq22')) || (xPlayer.includes('sq00') && xPlayer.includes('sq11') && xPlayer.includes('sq22')) || (xPlayer.includes('sq02') && xPlayer.includes('sq11') && xPlayer.includes('sq20')) || (xPlayer.includes('sq00') && xPlayer.includes('sq10') && xPlayer.includes('sq20')) || (xPlayer.includes('sq01') && xPlayer.includes('sq11') && xPlayer.includes('sq21')) || (xPlayer.includes('sq02') && xPlayer.includes('sq12') && xPlayer.includes('sq22'))) 
    {
        winnerDeclared = true
        playerTurn.innerText = "Player X Wins!"
        setTimeout(resetGame, 3000)
    }
}

const handleSq = function(e) {
    placeMarker(e)
}

// ATTACH EVENT LISTENERS   
gridContainer.addEventListener('click', handleSq)
resetButton.addEventListener('click', resetGame)