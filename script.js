// CONSTANT VALUES 
const MAX_TURNS = 9

// STATE VARIABLES
let turn = 'X'
let countSq00 = 0
let countSq01 = 0
let countSq02 = 0
let countSq10 = 0
let countSq11 = 0
let countSq12 = 0
let countSq20 = 0
let countSq21 = 0
let countSq22 = 0


// CACHED ELEMENT REFERENCES
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


// FUNCTIONS
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

const handleSq00 = function() {
    if (countSq00 === 0) {
        if (turn === 'O') {
            square00.innerText = 'O'
        }
        else if (turn === 'X') {
            square00.innerText = 'X'
        }
        switchTurn()
    }
    countSq00++
}

const handleSq01 = function() {
    if (countSq01 === 0) {
        if (turn === 'O') {
            square01.innerText = 'O'
        }
        else if (turn === 'X') {
            square01.innerText = 'X'
        }
        switchTurn()
    }
    countSq01++
}

const handleSq02 = function() {
    if (countSq02 === 0) {
        if (turn === 'O') {
            square02.innerText = 'O'
        }
        else if (turn === 'X') {
            square02.innerText = 'X'
        }
        switchTurn()
    }
    countSq02++
}

const handleSq10 = function() {
    if (countSq10 === 0) {
        if (turn === 'O') {
            square10.innerText = 'O'
        }
        else if (turn === 'X') {
            square10.innerText = 'X'
        }
        switchTurn()
    }
    countSq10++
}

const handleSq11 = function() {
    if (countSq11 === 0) {
        if (turn === 'O') {
            square11.innerText = 'O'
        }
        else if (turn === 'X') {
            square11.innerText = 'X'
        }
        switchTurn()
    }
    countSq11++
}

const handleSq12 = function() {
    if (countSq12 === 0) {
        if (turn === 'O') {
            square12.innerText = 'O'
        }
        else if (turn === 'X') {
            square12.innerText = 'X'
        }
        switchTurn()
    }
    countSq12++
}

const handleSq20 = function() {
    if (countSq20 === 0) {
        if (turn === 'O') {
            square20.innerText = 'O'
        }
        else if (turn === 'X') {
            square20.innerText = 'X'
        }
        switchTurn()
    }
    countSq20++
}

const handleSq21 = function() {
    if (countSq21 === 0) {
        if (turn === 'O') {
            square21.innerText = 'O'
        }
        else if (turn === 'X') {
            square21.innerText = 'X'
        }
        switchTurn()
    }
    countSq21++
}

const handleSq22 = function() {
    if (countSq22 === 0) {
        if (turn === 'O') {
            square22.innerText = 'O'
        }
        else if (turn === 'X') {
            square22.innerText = 'X'
        }
        switchTurn()
    }
    countSq22++
}

// ATTACH EVENT LISTENERS   
square00.addEventListener('click', handleSq00)
square01.addEventListener('click', handleSq01)
square02.addEventListener('click', handleSq02)
square10.addEventListener('click', handleSq10)
square11.addEventListener('click', handleSq11)
square12.addEventListener('click', handleSq12)
square20.addEventListener('click', handleSq20)
square21.addEventListener('click', handleSq21)
square22.addEventListener('click', handleSq22)