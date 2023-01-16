// properties of the html element "ball"
const ball = document.getElementById("ball");
const ballWidth = parseInt(ball.style.width);
const ballHeight = parseInt(ball.style.height);
// Set two x-axis coordinates to define the bounds of the window
const Xmin = 0;
const Xmax = window.innerWidth - ballWidth;
// two y-axis coordinates
const Ymin = 0;
const Ymax = window.innerHeight - ballHeight;
// variables for direction and position that can be redefined by the function
let positionX = 0;
let positionY = 0;
let velocityX = 7;
let velocityY = 4;

// write a function that can change the position of the html element "ball"
function bouncingBall() {

  // move the ball's position 
  positionX = positionX + velocityX;
  positionY = positionY + velocityY;
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  // switch directions when it hits a wall 
  let hitWall = false;
  if ( positionX >= Xmax || positionX <= 0 ) {
    velocityX = -velocityX;
    hitWall = true;
  }
  if ( positionY >= Ymax || positionY <= 0 ) {
    velocityY = -velocityY;
    hitWall = true;
  }
  
  // change the color of the ball if it hits a wall
  if (hitWall) {
    switch(ball.style.backgroundColor) {
      case "red":
        ball.style.backgroundColor = "orange";
        break;
      case "orange":
        ball.style.backgroundColor = "green";
        break;
      case "green":
        ball.style.backgroundColor = "blue";
        break;
      case "blue":
        ball.style.backgroundColor = "violet";
        break;
      case "violet":
        ball.style.backgroundColor = "red";
        break;
    }
  }

}

// move the ball  
setInterval(bouncingBall, 20);
