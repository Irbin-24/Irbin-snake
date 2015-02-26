/* ___________________________________________________________________________
 *                              VARIABLES
 * ___________________________________________________________________________
 */

var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenHeight;
var screenWidth;

var gameState;

/* ___________________________________________________________________________
 *                        EXECUTING GAME FUNCTIONS
 * ___________________________________________________________________________
 */
gameInitialize ();
snakeInitialize ();
foodInitialize ();
setInterval (gameLoop, 1000/30);   

/* ____________________________________________________________________________
 *                             GAME FUCNTIONS
 * ____________________________________________________________________________
 */

function gameInitialize(){
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
 
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
    document.addEventListener ("keydown", keyboardHandler );
    
    gameOverMenu = document.getElementById("gameOver");
       
    setState("PLAY");
}

function gameLoop(){
    gameDraw ();
    if (gameState == "PLAY")
    snakeUpdate ();
    snakeDraw ();
    foodDraw ();
}

function gameDraw() {
    context.fillStyle = "rgb(13,255,21)";
    context.fillRect(0, 0, screenWidth , screenHeight);
    snakeDraw ();
}

/* __________________________________________________________________________
 *                           SNAKE FUNCTIONS
 * __________________________________________________________________________
 */

function snakeInitialize () {
    snake =  [];
    snakeLength = 1;
    snakeSize  = 20;
    snakeDirection = "down";
    
    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push ({
          x:index,
          y:0        
      });   
    }
}

function snakeDraw () {
   for(var index = 0; index < snake.length; index++) {
       console.log;
      context.fillStyle = "white";
      context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
   }
}  
   
function snakeUpdate () {
    var snakeHeadX = snake [0] .x;
    var snakeHeadY = snake [0] .y;
    console.log(snakeDirection);
    if( snakeDirection == "down" ){
        snakeHeadY++;
    }
     else if(snakeDirection == "right") {
         snakeHeadX++;
     }
     
        checkFoodCollisions (snakeHeadX,snakeHeadY);     
        checkWallCollisions (snakeHeadX, snakeHeadY); 
          
    var snakeTail = snake.pop ();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift (snakeTail);

}

/* __________________________________________________________________________
 *                             FOOD FUNCTIONS
 * __________________________________________________________________________
 */

function foodInitialize () {
    food = {
        x: 0,
        y: 0
    };
    setFoodposition();
}

function foodDraw () {
    context.fillStyle = "white";
    context.fillRect(food.x * snakeSize ,food.y * snakeSize, snakeSize, snakeSize);
}

function setFoodposition () {
    var randomX = Math.floor (Math.random () * screenWidth );
    var randomY = Math.floor (Math.random () * screenHeight );
    
    
    food.x = Math.floor(randomX / snakeSize );
    food.y = Math.floor(randomY / snakeSize);
}
/*  ___________________________________________________________________________
 *                             INPUT FUNCTIONS
 *  ___________________________________________________________________________
 */

function keyboardHandler(event) {
    console.log(event.keyCode); 

 if (event.keyCode == "39" && snakeDirection != "left") {
     snakeDirection = "right";
 }
else if (event.keyCode == "40" && snakeDirection != "up" ){
    snakeDirection = "down";
     }
}
/*  __________________________________________________________________________
 *                            COLLISION HANDLING
 *  __________________________________________________________________________
 */

function checkFoodCollisions( snakeHeadX, snakeHeadY){
    if(snakeHeadX == food.x && snakeHeadY == food.y ){
        console.log("Foood Collision");
        snake.push({
            x:0,
            y:0     
        });
        snakeLength++;
    } 
}

function checkWallCollisions(snakeHeadX, snakeHeadY){
    if(snakeHeadX * snakeSize >= screenWidth || snakeHeadX * snakeSize  < 0) {
         setState("GAME OVER");   
    }
}

/* ___________________________________________________________________________
 *                     GAME STATE HANDLING
 *  __________________________________________________________________________
 */

function setState(state){
    gameState = state;
    showMenu(state);
}

function displayMenu(menu) {
menu.style.visibility= "visible";    
}

function showMenu (state){
if (state == "GAMEOVER") {
    displayMenu (gameOverMenu);
  }   
}


