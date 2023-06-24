//
// script.js: Working our way through https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
//
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

// Add an opaque red rectangle at (50,50) that is 100 px wide and 150 px tall
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);

// Add an opaque green rectangle at (75,75) that is 100 px wide and 100 px tall
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);

// Add a translucent purple rectangle at (25,100) that is 175 px wide and 150 px tall
ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
ctx.fillRect(25, 100, 175, 50);

// Add a "groja-esque" grid of blue, green, red, and yellow squares
const gridTopX = 200;     // X location of top left corner of grid
const gridTopY = 200;     // Y location of top left corner of grid
const squareSize = 20;    // Size of each square
const gridSize = 19;      // No. of squares in each row and column
let squareTopX = gridTopX;
let squareTopY = gridTopY;
let randomColorLetter = "B";

for ( let row=0; row < gridSize; row++ ) {
  squareTopY = gridTopY + (row * squareSize);
  for ( let col=0; col < gridSize; col++ ){
    randomColorLetter = getRandomPrimaryColor();
  // console.log( "randomColorLetter = " + randomColorLetter );
    squareTopX = gridTopX + (col * squareSize);
    if ( randomColorLetter == "B" ) {
      ctx.fillStyle = "rgb(0, 0, 255, 1)";
    } else if ( randomColorLetter == "G" ) {
      ctx.fillStyle = "rgb(0, 255, 0, 1)";
    } else if ( randomColorLetter == "R" ) {
      ctx.fillStyle = "rgb(255, 0, 0, 1)";
    } else if ( randomColorLetter == "Y" ) {
      ctx.fillStyle = "rgb(255, 255, 0, 1)";
    } else {
      ctx.fillStyle = "rgb(255, 255, 255, 1)";
    }
    ctx.fillRect( squareTopX, squareTopY, squareSize, squareSize );
  }
}
// getRandomPrimaryColor: return a single character, "B", "G", "R", or "Y"
function getRandomPrimaryColor() {
  const min = 0;
  const max = 4;
  const colorLetters = [ "B", "G", "R", "Y", ];
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  const randomColorLetter = colorLetters[randomInt];
  return randomColorLetter;
}
