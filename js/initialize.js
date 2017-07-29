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
/*
    platforms[0] = new Platform();
    platforms[0].width = player.width / 4;
    platforms[0].height = player.height / player.headSize;
    platforms[0].x = 0;
    platforms[0].y = player.y + player.height;

    platforms[1] = new Platform();
    platforms[1].width = player.width / 4;
    platforms[1].height = player.height / player.headSize;
    platforms[1].x = platforms[0].width;
    platforms[1].y = player.y + player.height;

    platforms[2] = new Platform();
    platforms[2].width = player.width;
    platforms[2].height = player.height / player.headSize;
    platforms[2].x = platforms[1].x + platforms[0].width;
    platforms[2].y = player.y + player.height;

    platforms[3] = new Platform();
    platforms[3].width = player.width;
    platforms[3].height = player.height / player.headSize;
    platforms[3].x = platforms[2].x + platforms[0].width;
    platforms[3].y = player.y + player.height;

    platforms[4] = new Platform();
    platforms[4].width = player.width;
    platforms[4].height = player.height / player.headSize;
    platforms[4].x = platforms[3].x + platforms[0].width;
    platforms[4].y = player.y + player.height;

    platforms[5] = new Platform();
    platforms[5].width = player.width;
    platforms[5].height = player.height / player.headSize;
    platforms[5].x = platforms[4].x + platforms[0].width;
    platforms[5].y = player.y + player.height;

    platforms[6] = new Platform();
    platforms[6].width = player.width;
    platforms[6].height = player.height / player.headSize;
    platforms[6].x = platforms[5].x + platforms[0].width;
    platforms[6].y = player.y + player.height;

    platforms[7] = new Platform();
    platforms[7].width = player.width;
    platforms[7].height = player.height / player.headSize;
    platforms[7].x = platforms[6].x + platforms[0].width;
    platforms[7].y = player.y + player.height;

    platforms[8] = new Platform();
    platforms[8].width = player.width;
    platforms[8].height = player.height / player.headSize;
    platforms[8].x = platforms[7].x + platforms[0].width;
    platforms[8].y = player.y + player.height;

    platforms[9] = new Platform();
    platforms[9].width = player.width;
    platforms[9].height = player.height / player.headSize;
    platforms[9].x = platforms[8].x + platforms[0].width;
    platforms[9].y = player.y + player.height;
    */
}
/*function initializeImages() {
    imageName.src = "./images/imageName.png";

    imageWidth = canvas.width * 0.10;
    imageHeight = canvas.height * 0.186666666666;
    imageScaleModifier = 1;
}*/
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