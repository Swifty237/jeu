const newGame = document.querySelector(".new-game")
const rollDice = document.querySelector(".roll-dice")
const hold = document.querySelector(".hold")
const dice = document.querySelector(".dice")
const scoring1 = document.querySelector(".scoring-1")
const scoring2 = document.querySelector(".scoring-2")
const scorePlayer1 = document.querySelector(".total-1")
const scorePlayer2 = document.querySelector(".total-2")
let player1 = document.getElementById("id-1")
let player2 = document.getElementById("id-2")
let dot1 = document.getElementById("dot-1")
let dot2 = document.getElementById("dot-2")

let count = 1

// Changement de background en fonction du joueur qui joue

let setTheme = () => {
  if (count % 2 != 1) {
    player1.classList.remove("gamer-on")
    player2.classList.remove("gamer-off")
    player1.classList.add("gamer-off")
    player2.classList.add("gamer-on")

    dot1.classList.remove("red-dot-on")
    dot2.classList.remove("red-dot-off")
    dot1.classList.add("red-dot-off")
    dot2.classList.add("red-dot-on")
  }
  else {
    player1.classList.remove("gamer-off")
    player2.classList.remove("gamer-on")
    player1.classList.add("gamer-on")
    player2.classList.add("gamer-off")

    dot1.classList.remove("red-dot-off")
    dot2.classList.remove("red-dot-on")
    dot1.classList.add("red-dot-on")
    dot2.classList.add("red-dot-off")
  }
}


// Initialisation et vérification du joueur en cours

let setPlayer = () => {
  if (count % 2 == 1) {
    scoring = scoring1
    scorePlayer = scorePlayer1
  }
  else {
    scoring = scoring2
    scorePlayer = scorePlayer2
  }
}

setPlayer()

// Vérification du joueur qui dépasse 100 pts

let winner = () => {
  if (parseInt(scorePlayer.innerHTML, 10) >= 100) {
    alert("La partie est terminé")
    if (count % 2 == 1) {
      alert("Le joueur 1 gagne")
      alert("Joueur 1:  "+ scorePlayer1.innerHTML + " points / Joueur 2:  " + scorePlayer2.innerHTML + " points")
      document.location.reload()
    }
    else {
      alert("Le Joueur 2 gagne")
      alert("Joueur 1:  " + scorePlayer1.innerHTML + " points / Joueur 2:  " + scorePlayer2.innerHTML + " points")
      document.location.reload()
    }  
  }
}

// Incrémentation du score global avec le score courant 

let setTotalScore = (total) => {
  let value = parseInt(scorePlayer.innerHTML, 10)
  value += total
  scorePlayer.innerHTML = value
  winner()
}


// Incrémentation du score courant avecle score obtenu sur le dé

let setCurrentScore = (number) => {
  let value = parseInt(scoring.innerHTML, 10)
  value += number
  scoring.innerHTML = value
}


// Modification de la valeur du dé

let changeDice = (number) => {
  dice.removeAttribute("src")
  dice.setAttribute("src", "dado_" + number + ".svg")
}


// Lancement d'une nouvelle partie

newGame.addEventListener("click", () => {
  document.location.reload()
})


// Génération d'une valeur aléatoire entre 1 et 6 grace a un évènement clic

rollDice.addEventListener("click", () => {
  let number = Math.floor(Math.random()*6 + 1)

  
  if (number == 1) {
    changeDice(number)
    scoring.innerHTML = 0
    count ++
    setPlayer()
    setTheme()
  }
  
  else {
    changeDice(number)
    setCurrentScore(number)
  }
})


// Ajout du score courant au global avec changement de joueur

hold.addEventListener("click", () => {
  let total = parseInt(scoring.innerHTML, 10)
  setTotalScore(total)
  if (scoring.innerHTML == 0) {
    alert("Votre score courant est de 0, Vous devez lancer le dé avant d'enregistrer")
  }
  else {
    scoring.innerHTML = 0
    count ++
    setPlayer()
    setTheme()
  }
})