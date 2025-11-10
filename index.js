// We retrieve the score elements, fouls, bonus eligebility from the DOM to update their values later
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeFouls = document.getElementById("home-fouls");
let guestFouls = document.getElementById("guest-fouls");
let homeBonus = document.getElementById("bonus-home");
let guestBonus = document.getElementById("bonus-guest");

// We initialize the score counters for the home team
let homeCount = 0;

// Function to increment home score by a given value
function incrementHome(values) {
    homeCount += values
    homeScore.textContent = homeCount
}

// Event listeners for home team buttons that increment the score
document.getElementById("onehome").addEventListener("click", function () { incrementHome(1) })
document.getElementById("twohome").addEventListener("click", function () { incrementHome(2) })
document.getElementById("threehome").addEventListener("click", function () { incrementHome(3) })

// We initialize the score counters for the guest team
let guestCount = 0;

// Function to increment guest score by a given value
function incrementGuest(values) {
    guestCount += values
    guestScore.textContent = guestCount
}

// Event listeners for guest team buttons that increment the score
document.getElementById("oneguest").addEventListener("click", function () { incrementGuest(1) })
document.getElementById("twoguest").addEventListener("click", function () { incrementGuest(2) })
document.getElementById("threeguest").addEventListener("click", function () { incrementGuest(3) })

// Initialize foul counters for both teams
let homeFoulCount = 0;
let guestFoulCount = 0;

// Function to increment home fouls and check if away has a bonus advantage
function incrementHomefoul() {
    homeFoulCount += 1
    homeFouls.textContent = homeFoulCount
    if (homeFoulCount >= 5) {
        homeBonus.textContent = "Away Has Bonus Advantage"
    } else {
        homeBonus.textContent = "No Bonus Advantage"
    }
}

// Function to increment guest fouls and check if home has a bonus advantage
function incrementGuestFoul() {
    guestFoulCount += 1
    guestFouls.textContent = guestFoulCount
    if (guestFoulCount >= 5) {
        guestBonus.textContent = "Home Has Bonus Advantage"
    } else {
        guestBonus.textContent = "No Bonus Advantage"
    }
}

// Event listeners for foul buttons
document.getElementById("foulhome").addEventListener("click", incrementHomefoul)
document.getElementById("foulguest").addEventListener("click", incrementGuestFoul)

s

