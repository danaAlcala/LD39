/*
Player walks and has the ability to jump.
Player speed decrements as depression increases.  It increments as depression decreases.
Player interacts with:
- Whispers
    Positive whispers will decrease depression.
    Negative whispers will increase depression.
- Checkpoints (Life-changing events)
    Gain loved-one (Loved ones follow player for rest of game and help decrease depression over time).
    Lose loved-one (Loved one 'falls off' and a significant increase in depression).
    Get a job (Income generates & helps decrease depression over time)
    Fired! (Income stops and a significant increase in depression)
- Pits of Despair
    Simple platform pit.  Bridge can be automatically constructed with money if the player misses the jump.
    Pits that actually can be jumped over will charge the full-bridge price.
    Pits that cannot actually be jumped over will charge a per-block price.
- Money
    Helps decrease depression over time depending on amount.
    Used to build bridges over pits of despair.
    Start with set amount.  Gain with income from job.
*/

function Player(){
    this.isWalking = false;
    this.walkSpeed; //initPlayer();
    this.walkSpeedMultipier = 0.5;
    this.isJumping = false;
    this.jumpPower; //initPlayer();
    this.jumpPowerMultiplier = 0.2;
    this.money = 1000;
    this.income = 0;
    this.depressionUnit = 10;
    this.depression = 0;//initPlayer();
    this.hasJob = false;
    this.lovedOnes = 2;
    this.width; //initPlayer()
    this.height; //initPlayer()
    this.x; //initPlayer()
    this.y; //initPlayer()
    this.headSize = 5;
    this.maxDepression = 100;
    this.minDepression = 10;
    this.lives = 10;  
}

/*if (playerInitialized){
    if (player.depression > player.maxDepression){
        player.depression = player.maxDepression;
        maxDepressionReached = true; // debug
        minDepressionReached = false; // debug
    }
    if (player.depression < player.minDepression){
        player.depression = player.minDepression;
        minDepressionReached = true; // debug
        maxDepressionReached = false; // debug
    }
}*/
function debugPlayer(){
    if (player.depression > player.maxDepression){
        player.depression = player.maxDepression;
        maxDepressionReached = true; // debug
        minDepressionReached = false; // debug
    }
    if (player.depression < player.minDepression){
        player.depression = player.minDepression;
        minDepressionReached = true; // debug
        maxDepressionReached = false; // debug
    }
}

