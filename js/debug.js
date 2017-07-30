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
var drawPlatformsCalled = false;
var dePitCalled = 0;
var pitCalled = 0;

function debug(){
    //Player
    //console.log("player.x: " + player.x);
    //console.log("player.y: " + player.y);
    //console.log("player.depression: " + player.depression);
    //console.log("player height: " + player.height);
    //console.log("maxDepressionReached: " + maxDepressionReached);
    //console.log("minDepressionReached: " + minDepressionReached);
    //console.log("player.maxDepression: " + player.maxDepression);
    //console.log("player.minDepression: " + player.minDepression);
    

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

    //Loved Ones
    //console.log("lovedOnes[0].width: " + lovedOnes[0].width);

    //Platforms
    //console.log("drawPlatformsCalled: " + drawPlatformsCalled);
    //console.log("(platforms[0].x,platforms[0].y): (" + platforms[0].x + "," + platforms[0].y + ")");
    //console.log("(platforms[9].x,platforms[9].y): (" + platforms[9].x + "," + platforms[9].y + ")");
    //console.log("platformIndex: " + platformIndex);
    //console.log("pitIndex: " + pitIndex);
    console.log("rebuildIndex: " + rebuildIndex);
    console.log("lastPlatform: " + lastPlatform);
    
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