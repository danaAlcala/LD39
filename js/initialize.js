var playerInitialized = false;

function initCanvas() {
    // console.log('Called initializeCanvas()');  // DEBUG

    canvas = document.getElementById('gameCanvas'); // This grabs the canvas from the HTML for use in the script.
    canvasContext = canvas.getContext('2d'); // "The getContext() method returns an object that provides methods and properties for drawing on the canvas." from w3schools.com
    canvasBGColor = 'black';

    // console.log('initializeCanvas() complete');  // DEBUG
}
function initFPS() {
    // console.log('Called initializeFPS()');  // DEBUG

    framesPerSecond = 30;

    // console.log('initializeFPS() complete');  // DEBUG
}
function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}
function initPlayer(){
    player = new Player();
    player.width = canvas.width / 10;
    player.height = canvas.height / 3;
    player.x = (canvas.width / 2 - player.width / 2) / 2 + player.width;
    player.y = canvas.height / 2 - player.height / 2;
    player.walkSpeed = player.width * player.walkSpeedMultiplier;
    player.jumpPower = player.height * player.jumpPowerMultiplier;
    player.depression = depressionUnit * 9;
    playerInitialized = true;
}
function initMeasure(){
    unitOfMeasureX = player.width;
    unitOfMeasureY = player.height / player.headSize;
}
function initDeathpression(){
    death = new Deathpression();
    death.width = unitOfMeasureX / 2;
    death.height = unitOfMeasureY;
    death.x = player.x - death.width;
    death.y = player.y;
    death.xGrowthRate = death.width / 5;
    death.yGrowthRate = death.height;
    death.maxWidth = player.width;
    death.maxHeight = player.height;
    death.minWidth = death.xGrowthRate;
    death.minHeight = death.xGrowthRate;
}
function initLovedOnes(index){
    //First of two
    lovedOnes[0] = new LovedOne();
    lovedOnes[0].width = player.width;
    lovedOnes[0].height = player.height;
    lovedOnes[0].jumpPower = player.jumpPower;
    lovedOnes[0].x = death.x - lovedOnes[0].width;
    lovedOnes[0].y = player.y;

    //2nd of two
    lovedOnes[1] = new LovedOne();
    lovedOnes[1].width = player.width;
    lovedOnes[1].height = player.height;
    lovedOnes[1].jumpPower = player.jumpPower;
    lovedOnes[1].x = lovedOnes[0].x - lovedOnes[1].width;
    lovedOnes[1].y = player.y;
}
function initPlatforms(){
    //10 Total
    for (i = 0; i < 40; i++){
        platforms[i] = new Platform;
        platforms[i].width = player.width / 4;
        platforms[i].height = player.height / player.headSize;
        if (i == 0){
            platforms[i].x = 0;
        }
        else {
            platforms[i].x = platforms[i-1].x + platforms[i].width;
        }
        platforms[i].y = player.y + player.height;

    }
}
function initializeEverything() {
    // console.log('Called initializeEverything()');  // DEBUG

    //debugCard = 0;

    initCanvas();
    initFPS();
    initInput();
    initPlayer();
    initMeasure();
    initDeathpression();
    initLovedOnes();
    initPlatforms();

    // console.log('initializeEverything() completed');  // DEBUG

}