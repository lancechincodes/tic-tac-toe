// CONSTANT VALUES 
const MAX_TURNS = 9

// STATE VARIABLES
let turn = 'X'

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
    sq00.innerText = ""
    sq01.innerText = ""
    sq02.innerText = ""
    sq10.innerText = ""
    sq11.innerText = ""
    sq12.innerText = ""
    sq20.innerText = ""
    sq21.innerText = ""
    sq22.innerText = ""
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

const handleSq = function(e) {
    console.log(e.target.innerText)
    if (!e.target.innerText) { // if square does NOT have text
        if (turn === 'O') {
            e.target.innerText = 'O'
        }
        else if (turn === 'X') {
            e.target.innerText = 'X'
        }
        switchTurn()
    }
    else { // if square already has text
        warningMessage.classList.remove('hide')
        setTimeout(() => warningMessage.classList.add('hide'), 1500)
    }
}

// ATTACH EVENT LISTENERS   
gridContainer.addEventListener('click', handleSq)
resetButton.addEventListener('click', resetGame)