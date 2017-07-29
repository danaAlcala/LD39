//Draw
var drawPlayerCalled = 0;
var drawDeathpressionCalled = 0;
var deathMaxHeightReached = false;
var deathMaxWidthReached = false;
var deathMinHeightReached = false;
var deathMinWidthReached = false;
var maxDepressionReached = false;
var minDepressionReached = false;
var playerInitialized = false;

function debug(){
    //Player
    //console.log("player.x: " + player.x);
    //console.log("player.y: " + player.y);
    console.log("player.depression: " + player.depression);
    //console.log("player height: " + player.height);
    console.log("maxDepressionReached: " + maxDepressionReached);
    console.log("minDepressionReached: " + minDepressionReached);
    console.log("player.maxDepression: " + player.maxDepression);
    console.log("player.minDepression: " + player.minDepression);
    

    //Deathpression
    //console.log("death.x: " + death.x);
    //console.log("death.y: " + death.y);
    //console.log("death.width: " + death.width)
    //console.log("death.height: " + death.height);
    //console.log("depressionUnit: " + depressionUnit);
    //console.log("death.xGrowthRate: " + death.xGrowthRate);
    //console.log("death.yGrowthRate: " + death.yGrowthRate);
    //From setDeathspressionSize():
    //console.log("(player.depression - 50) / depressionUnit: " + (player.depression - 50) / depressionUnit);
    //console.log("deathMaxHeightReached: " + deathMaxHeightReached);
    //console.log("deathMaxWidthReached: " + deathMaxWidthReached);
    //console.log("deathMinHeightReached: " + deathMinHeightReached);
    //console.log("deathMinWidthReached: " + deathMinWidthReached);

    //Draw
    //console.log("drawplayerCalled: " + drawPlayerCalled + " times");
    //console.log("drawDeathpressionCalled: " + drawDeathpressionCalled + " times");

    //Measure
    //console.log("unitOfMeasureX: " + unitOfMeasureX);
    //console.log("unitOfMeasureY: " + unitOfMeasureY);

    //Input
    //console.log("keyHeld:" + keyHeld);

    //Initialization
    //console.log("playerInitialized: " + playerInitialized);
}