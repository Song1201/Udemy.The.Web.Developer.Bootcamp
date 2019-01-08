var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click",function(){
  if (!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;  
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
});

p2Button.addEventListener("click",function(){
  if (!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",reset);

var winningScoreDisplay = document.querySelector("#winningScore");
var numInput = document.querySelector("input");
numInput.addEventListener("change",function(){
  winningScore = Number(numInput.value);
  winningScoreDisplay.textContent = winningScore;
  reset();
});

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner");
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");
}