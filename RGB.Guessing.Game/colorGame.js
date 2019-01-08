var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  reset();
  setupModeButtons();
  setupSquares();
  resetButton.addEventListener("click",reset);
}

function setupModeButtons() {
  for (var i=0; i<modeButtons.length; i++) {
    console.log(i);
    console.log(modeButtons[i]);
    modeButtons[i].addEventListener("click",function(){
      console.log(this);
      for (var j=0; j<modeButtons.length; j++) 
        modeButtons[j].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") numSquares = 3;
      else numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  colors.forEach(function(color,i){
    squares[i].style.backgroundColor = color;
    squares[i].addEventListener("click",function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
    else squares[i].style.display = "none";
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Color";
}

function changeColors(color) {
  for (var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var colors = [];
  for (var i=0; i<num; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}