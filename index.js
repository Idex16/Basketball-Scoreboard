let homeScore = document.getElementById ("home-score")
let guestScore = document.getElementById ("guest-score")

let homeCount = 0
let count = 0


function homeOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function hometwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homethree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestOne () {
    count += 1
    guestScore.textContent = count
}

function guestTwo () {
    count += 2
    guestScore.textContent = count
}

function guestThree () {
    count += 3
    guestScore.textContent = count
}

