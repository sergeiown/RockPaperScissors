const buttons = document.querySelectorAll(".button");
const userChoiceImg = document.querySelector(".user-choice");
const oppChoiceImg = document.querySelector(".opp-choice");
const iconContainer = document.querySelector(".icons");
const resultsContainer = document.querySelector(".results");
const resultsInfo = document.querySelector(".result");
const [wonCounter, lostCounter, drawCounter] = document.querySelectorAll("dd");
const restartBtn = document.querySelector(".restart-btn");

// THIS IS THE SAME AS LINE 7{
//     const descriptions = document.querySelectorAll("dd")
//     const wonCounter = descriptions[0]
//     const lostCounter = descriptions[1]
//     const drawCounter = descriptions[2]
// }

const stats = { WON: 0, LOST: 0, DRAW: 0 };

for (const button of buttons) {
  button.onclick = handleMove;
  // button.onclick = console.log
}

restartBtn.onclick = () => {
  iconContainer.hidden = false;
  resultsContainer.hidden = true;
};

// fuctions
function handleMove(event) {
  // remember user's choice
  const userChoice = event.target.classList[0];
  console.log(userChoice);

  // make random oponent's choice
  const oppChoice = selectRandom("rock", "paper", "scissors");
  console.log(oppChoice);

  // select a winner
  const result = getResult(userChoice, oppChoice);
  console.log(result);

  // show result
  showResult(result, userChoice, oppChoice);

  // update stats
  stats[result]++;
  updateStats();
}

function updateStats() {
  wonCounter.innerText = stats["WON"];
  lostCounter.innerText = stats["LOST"];
  drawCounter.innerText = stats["DRAW"];
}

function showResult(result, userChoice, oppChoice) {
  iconContainer.hidden = true;
  resultsContainer.hidden = false;

  userChoiceImg.src = `img/${userChoice}_icon.svg`;
  oppChoiceImg.src = `img/${oppChoice}_icon.svg`;

  resultsInfo.textContent = result;
}

function getResult(userChoice, oppChoice) {
  //rock + rock => draw;
  //rock + paper => lost;
  //rock + scissors => won;

  //paper + rock => won
  //paper + paper => draw;
  //paper + scissors => lost;

  //scissors + rock => lost;
  //scissors + paper => won;
  //scissors + scissors => draw;

  const pair = userChoice + oppChoice;

  if ("rockscissors paperrock scissorspaper".includes(pair)) {
    return "WON";
  } else if ("rockpaper paperscissors scissorsrock".includes(pair)) {
    return "LOST";
  } else {
    return "DRAW";
  }
}

function selectRandom(...choices) {
  const i = Math.floor(Math.random() * choices.length);
  return choices[i];
}
