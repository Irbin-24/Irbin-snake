var snake;
var snakeLength;
var snakeSize;

var context;
var screenHeight;
var screenWidth;

gameInitialize ();
gameDraw(); 

function gameInitialize(){
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
 
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
}


function gameLoop(){
    
}

function gameDraw() {
    console.log(screenWidth + " " + screenHeight);
    context.fillStyle = "rgb(13,255,21)";
    context.fillRect(0, 0, screenWidth , screenHeight);
}

function snakeInitialize () {
    snake =  [];
    snakeLength = 5;
    sankeSize  = 20;
    
    for (var index = 0;index < snakeLength; index++ ) {
        
    }
}

function snakeDraw () {
    
}

function snakeUpdate () {
    
}