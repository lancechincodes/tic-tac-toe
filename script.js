// CONSTANT VALUES 
const MAX_TURNS = 9

// STATE VARIABLES
let turn = 'X'

// CACHED ELEMENT REFERENCES
const gridContainer = document.querySelector('.grid-container')
const square00 = document.querySelector('#sq00')
const square01 = document.querySelector('#sq01')
const square02 = document.querySelector('#sq02')
const square10 = document.querySelector('#sq10')
const square11 = document.querySelector('#sq11')
const square12 = document.querySelector('#sq12')
const square20 = document.querySelector('#sq20')
const square21 = document.querySelector('#sq21')
const square22 = document.querySelector('#sq22')
const playerTurn = document.querySelector('#player-turn')
const resetButton = document.querySelector('#reset')


// FUNCTIONS
const resetGame = function() {
    square00.innerText = ""
    square01.innerText = ""
    square02.innerText = ""
    square10.innerText = ""
    square11.innerText = ""
    square12.innerText = ""
    square20.innerText = ""
    square21.innerText = ""
    square22.innerText = ""
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
    if (!e.target.innerText) {
        if (turn === 'O') {
            e.target.innerText = 'O'
        }
        else if (turn === 'X') {
            e.target.innerText = 'X'
        }
        switchTurn()
    }
}

// ATTACH EVENT LISTENERS   
gridContainer.addEventListener('click', handleSq)
resetButton.addEventListener('click', resetGame)