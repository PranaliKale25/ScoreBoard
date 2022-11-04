
let homeScore = document.getElementById("home-score");

let guestScore = document.getElementById("guest-score");


// function addHomeOne() {
//     homeRes += 1;
//     homeScore.innerText = homeRes;
// }

// function addHomeTwo() {
//     homeRes += 2;
//     homeScore.innerText = homeRes;
// }

// function addHomeThree() {
//     homeRes += 3;
//     homeScore.innerText = homeRes;
// }


// function addGuestOne() {
//     guestRes += 1;
//     guestScore.innerText = guestRes;
// }

// function addGuestTwo() {
//     guestRes += 2;
//     guestScore.innerText = guestRes;
// }
// function addGuestThree() {
//     guestRes += 3;
//     guestScore.innerText = guestRes;
// }

function add(type,increment){
    if(type == 'home'){
        homeScore.innerText = parseInt(homeScore.innerText)+increment;
    }else if(type == 'guest'){
        guestScore.innerText = parseInt(guestScore.innerText)+increment;
    }
    highlight();
}

function resetScore() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
    highlight();
}

function highlight() {
    if(homeScore.innerText > guestScore.innerText) {
        homeScore.classList.add('greater');
        guestScore.classList.remove('greater');    
    }
    else if(homeScore.innerText < guestScore.innerText) {
        guestScore.classList.add('greater');
        homeScore.classList.remove('greater');    
    } else {
        homeScore.classList.remove('greater');
        guestScore.classList.remove('greater');

    }
}
