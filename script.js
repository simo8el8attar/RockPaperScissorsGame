
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let randomIndex = getRandomInt(0,3)

const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")

const restart = document.querySelector("#Restart")
const again = document.querySelector("#playagn")
const notifc = document.querySelector("#notification")
const score = document.querySelector("#Score")
let Score = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


const choices = ["Rock","Paper","Scissors"];
let Ai = choices[randomIndex]

function ifRock() {

  setTimeout(function () {
    playerOne.src = "playerchoices/rock1.svg";
    if (Ai === "Rock") {
      playerTwo.src = "playerchoices/rock2.svg";
      notifc.textContent = "It's a rock-solid draw!";
    } else if (Ai === "Paper") {
      playerTwo.src = "playerchoices/paper2.svg";
      notifc.textContent = "Paper covers rock. You lose!";
      notifc.style.color = "red";
    } else if (Ai === "Scissors") {
      playerTwo.src = "playerchoices/scissors2.svg";
      notifc.textContent = "Rock crushes scissors. You win!";
      notifc.style.color = "green";
      Score += 1;
    }
  }, 200);

}

function ifPaper() {

  setTimeout(function () {
    playerOne.src = "playerchoices/paper1.svg";
    if (Ai === "Rock") {
      playerTwo.src = "playerchoices/rock2.svg";
      notifc.textContent = "Paper covers rock. You win!";
      notifc.style.color = "green";
      Score += 1;
    } else if (Ai === "Paper") {
      playerTwo.src = "playerchoices/paper2.svg";
      notifc.textContent = "It's a paper-perfect draw!";
    } else if (Ai === "Scissors") {
      playerTwo.src = "playerchoices/scissors2.svg";
      notifc.textContent = "Scissors cut through paper. You lose!";
      notifc.style.color = "red";
    }
  }, 200);

}

function ifScissors() {

  setTimeout(function () {
    playerOne.src = "playerchoices/scissors1.svg";
    if (Ai === "Rock") {
      playerTwo.src = "playerchoices/rock2.svg";
      notifc.textContent = "Rock crushes scissors. You lose!";
      notifc.style.color = "red";
    } else if (Ai === "Paper") {
      playerTwo.src = "playerchoices/paper2.svg";
      notifc.textContent = "Scissors cut through paper. You win!";
      notifc.style.color = "green";
      Score += 1;
    } else if (Ai === "Scissors") {
      playerTwo.src = "playerchoices/scissors2.svg";
      notifc.textContent = "It's a scissor-spectacular draw!";
    }
  }, 200);
}


rock.addEventListener("click",ifRock)
paper.addEventListener("click",ifPaper)
scissors.addEventListener("click",ifScissors)


function playAagain(){
  setTimeout(function () {
    randomIndex = getRandomInt(0,3)
    Ai = choices[randomIndex]
    console.log(Ai)
    score.textContent = "Score:"+Score
    playerOne.src = "player1.svg"
    playerTwo.src = "player2.svg"
    notifc.textContent = ""
    notifc.style.color = "black";
  }, 500);
}
function restartGame() {
  setTimeout(function () {
    Score = 0;
    score.textContent = "Score:";
    notifc.textContent = "";
    playerOne.src = "player1.svg";
    playerTwo.src = "player2.svg";
  }, 500);
}
restart.addEventListener("click",restartGame)
again.addEventListener("click",playAagain)

/*  setTimeout(function () {
    playerOne.src = "";
    playerTwo.src = "";
    notifc.textContent = "Make your choice!";
  }, 2000);*/