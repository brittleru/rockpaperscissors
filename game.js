
// Cache the DOM

let yourScore = 0;
let computerScore = 0;
const yourScoreSpan = document.getElementById("your-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreDiv = document.querySelector(".score");
const winnerDiv = document.querySelector(".winner p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
// Pick your choise

function win(you, pc) {
  yourScore++;
  let you2 = you;
  let pc2 = pc;


  let newYou = you2[0].toUpperCase();
  let newPc = pc2[0].toUpperCase();

  for(let i = 1; i < you2.length; i++) {
    newYou += you[i];
  }
  for(let i = 1; i < pc2.length; i++) {
    newPc += pc2[i];
  }

  pc2 = newPc;
  you2 = newYou;

  yourScoreSpan.innerHTML = yourScore;
  computerScoreSpan.innerHTML = computerScore;
  winnerDiv.innerHTML = `${you2} vs ${pc2}. YOU WIN!`;


  document.getElementById("win").classList.add("green-text")
  setTimeout(function() {document.getElementById("win").classList.remove("green-text")}, 1000);

  document.getElementById(you).classList.add("green-glow");
  setTimeout(function() {document.getElementById(you).classList.remove("green-glow")}, 1000);

}

function lose(you, pc) {
  computerScore++;
  let you2 = you;
  let pc2 = pc;
  let newYou = you2[0].toUpperCase();
  let newPc = pc2[0].toUpperCase();

  for(let i = 1; i < you2.length; i++) {
    newYou += you[i];
  }
  for(let i = 1; i < pc2.length; i++) {
    newPc += pc2[i];
  }

  pc2 = newPc;
  you2 = newYou;


  yourScoreSpan.innerHTML = yourScore;
  computerScoreSpan.innerHTML = computerScore;
  winnerDiv.innerHTML = `${you2} vs ${pc2}. YOU LOSE!`;

  document.getElementById("win").classList.add("red-text")
  setTimeout(function() {document.getElementById("win").classList.remove("red-text")}, 1000);

  document.getElementById(you).classList.add("red-glow");
  setTimeout(function() {document.getElementById(you).classList.remove("red-glow")}, 1000);

}

function bothWin(you, pc) {
  let you2 = you;
  let pc2 = pc;
  let newYou = you2[0].toUpperCase();
  let newPc = pc2[0].toUpperCase();

  for(let i = 1; i < you2.length; i++) {
    newYou += you[i];
  }
  for(let i = 1; i < pc2.length; i++) {
    newPc += pc2[i];
  }

  pc2 = newPc;
  you2 = newYou;

  winnerDiv.innerHTML = `Both used ${you2}. Both WIN!`;

  // document.getElementById(winnerDiv).classList.add("white-text");
  // setTimeout(function() {document.getElementById(winnerDiv).classList.remove("white-text")}, 1000);

  document.getElementById("win").classList.add("white-text")
  setTimeout(function() {document.getElementById("win").classList.remove("white-text")}, 1000);

  document.getElementById(you).classList.add("gray-glow");
  setTimeout(function() {document.getElementById(you).classList.remove("gray-glow")}, 1000);
}

function game(userChoise) {
  const pcChoise = getPcChoise();
  switch (userChoise + pcChoise) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoise, pcChoise);
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoise, pcChoise);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      bothWin(userChoise, pcChoise);
      break;

    default:
      break;
  }
}

function getPcChoise() {
  const choises = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choises.length);

  return choises[randomNumber];
}

function main() {
  rockDiv.addEventListener("click", function() {
    game("rock");
  })

  paperDiv.addEventListener("click", function() {
    game("paper");
  })

  scissorsDiv.addEventListener("click", function() {
    game("scissors");
  })

}

main();
