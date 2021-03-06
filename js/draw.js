/*function drawImage(x, y, sheetX, sheetY) {			
	canvasContext.drawImage(imageName, sheetX * IMAGE_FROM_SHEET_WIDTH, sheetY * IMAGE_FROM_SHEET_HEIGHT, IMAGE_FROM_SHEET_WIDTH, IMAGE_FROM_SHEET_HEIGHT, x, y, imageWidth * imageScaleModifier, imageHeight * imageScaleModifier);
}*/
function drawCanvas() {
    // console.log('Called drawCanvas()');  // DEBUG

    canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.

    // console.log('drawCanvas() complete');  // DEBUG
}
function drawRect(color, x, y, width, height) {
    // console.log('Called drawRect()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);

    // console.log('drawRect() complete');  // DEBUG
}
function drawCircle(color, x, y, radius) {
    // console.log('Called drawCircle()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.beginPath();  // Starts the fill path.
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

    // console.log('drawCircle() complete');  // DEBUG
}
function drawText(color, text, x, y) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
}
function drawPlayer(){
    drawRect('green', player.x,player.y, player.width,player.height);

    drawPlayerCalled++; //debug
}
function drawDeathpression(){
    drawRect('red', death.x,death.y, death.width,death.height);

    drawDeathpressionCalled++; //debug
}
function drawLovedOne(index){
    switch (index) {
        case 0:
            drawRect('blue', lovedOnes[0].x,lovedOnes[0].y, lovedOnes[0].width,lovedOnes[0].height);
        default:
            drawRect('magenta', lovedOnes[1].x,lovedOnes[1].y, lovedOnes[1].width,lovedOnes[1].height);
    }
}
function drawPlatforms(){
    for (i = 0; i < 40; i++){
        if (platforms[i].exists){
            drawRect('yellow', platforms[i].x,platforms[i].y, platforms[i].width,platforms[i].height);
        }
    }
    drawPlatformsCalled = true; // debug
}

function drawEverything() {
    drawCanvas();
    drawPlayer();
    drawDeathpression();
    if (lovedOnes[0].alive){
        drawLovedOne(0);
    }
    if (lovedOnes[1].alive){
        drawLovedOne(1);
    }
    drawPlatforms();
}