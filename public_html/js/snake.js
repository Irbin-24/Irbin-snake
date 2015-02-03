var snake;

var context;
var screenHeight;
var screenWidth;

gameInitialize ();
gameDraw (); 

function gameInitialize(){
    var canvas = document.getElementById ("game-screen");
    contextt = canvas.getContext ("2d");
    
    screenwidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
}


function gameLoop(){
    
}

function gameDraw() {
    context.fillstyle = "rgb(92,245,78)";
    context.fillRect (0,0, screenWidth, screenHeight);
}