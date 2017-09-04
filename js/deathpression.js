var depressionUnit = 10;

function Deathpression(){
    this.width; //initDeathpression()
    this.height; //initDeathpression()
    this.x; //initDeathpression()
    this.y; //initDeathpression()
    this.xGrowthRate;
    this.yGrowthRate;
    this.maxWidth;
    this.maxHeight;
    this.minWidth;
    this.minHeight;
}

function setDeathpressionYGrowthRate(){
    if (player.depression < 50){
        death.yGrowthRate = unitOfMeasureY / 5;
    }
    else {
        death.yGrowthRate = unitOfMeasureY;
    }
}
function setDeathpressionSize(){
    death.width = death.xGrowthRate * (player.depression / depressionUnit);
    if (player.depression < 50){
        death.height = death.yGrowthRate * (player.depression / depressionUnit);
    }
    else if (player.depression == 50){
        death.height = unitOfMeasureY;
    }
    else if (player.depression == 90){
        death.height = player.height;
    }
    else {
        death.height = death.yGrowthRate * ((player.depression - 40) / depressionUnit);
    }
    if (death.width > death.maxWidth){
        death.width = death.maxWidth;
        deathMaxWidthReached = true; // debug
        deathMinWidthReached = false; // debug
    }
    if (death.height > death.maxHeight){
        death.height = death.maxHeight;
        deathMaxHeightReached = true; // debug
        deathMinHeightReached = false; // debug
    }
    if (death.width < death.minWidth){
        death.width = death.minWidth;
        deathMinWidthReached = true; // debug
        deathMaxWidthReached = false; // debug
    }
    if (death.height < death.minHeight){
        death.height = death.minHeight;
        deathMinHeightReached = true; // debug
        deathMaxHeightReached = false; // debug
    }
}
function setDeathpressionX(){
    death.x = player.x - death.width;
}
/*function debugDeathpression(){
    if (keyHeld == false){
        if (holdUp){
            player.depression += depressionUnit;
            debugPlayer();
            keyHeld = true;
        }
        if (holdDown){
            player.depression -= depressionUnit;
            debugPlayer();
            keyHeld = true;
        }
    }
}*/

function updateDeathpression(){
    setDeathpressionYGrowthRate();
    setDeathpressionSize();
    setDeathpressionX();
    //debugDeathpression();
}