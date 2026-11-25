// Track game state and scores
let started = false;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];

// Start game if name is not empty
function startGame() {
  let name = document.getElementById("playerName").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  started = true;
  document.getElementById("welcomeMsg").innerHTML = "Welcome, " + name + "!";
  document.getElementById("startTime").innerHTML = "Started on: " + new Date();
}

// Pick random choice for computer
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

// Match choice to image file name (scissor.png is singular)
function getImgFile(choice) {
  if (choice === "scissors") {
    return "scissor.png";
  }
  return choice + ".png";
}

// Play one round
function playRound(playerChoice) {
  if (!started) {
    alert("Click Start Game first.");
    return;
  }

  let computerChoice = getComputerChoice();
  round++;

  // Change both images
  document.getElementById("playerImg").src = getImgFile(playerChoice);
  document.getElementById("computerImg").src = getImgFile(computerChoice);

  let outcome = "";
  let color = "";

  // Decide winner
  if (playerChoice === computerChoice) {
    outcome = "Draw";
    color = "grey";
    draws++;
    document.getElementById("draws").innerHTML = draws;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    outcome = "Win";
    color = "green";
    wins++;
    document.getElementById("wins").innerHTML = wins;
  } else {
    outcome = "Lose";
    color = "red";
    losses++;
    document.getElementById("losses").innerHTML = losses;
  }

  // Show result in color
  let resultText = document.getElementById("result");
  resultText.innerHTML = "Result: " + outcome;
  resultText.style.color = color;

  // Save result and add row to table
  results.push(outcome);
  document.getElementById("history").innerHTML +=
    "<tr><td>" + round + "</td><td>" + playerChoice + "</td><td>" + computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// Show total rounds and win percentage
function showSummary() {
  let total = results.length;
  let winCount = 0;

  for (let i = 0; i < total; i++) {
    if (results[i] === "Win") {
      winCount++;
    }
  }

  let percent = total > 0 ? Math.round((winCount / total) * 100) : 0;
  document.getElementById("summary").innerHTML =
    "You played " + total + " rounds and won " + percent + "%";
}

// Reset 
function resetGame() {
  started = false;
  wins = 0;
  losses = 0;
  draws = 0;
  round = 0;
  results = [];

  document.getElementById("playerName").value = "";
  document.getElementById("welcomeMsg").innerHTML = "";
  document.getElementById("startTime").innerHTML = "";
  document.getElementById("wins").innerHTML = 0;
  document.getElementById("losses").innerHTML = 0;
  document.getElementById("draws").innerHTML = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("summary").innerHTML = "";
  document.getElementById("history").innerHTML =
    "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";
}