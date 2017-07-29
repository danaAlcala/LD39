var lovedOnes = [];

function LovedOne(){
    this.isWalking = false;
    this.isJumping = false;
    this.jumpPower; // Will be same as player.
    this.width;
    this.height;
    this.x;
    this.y;
    this.alive = true;
}

function updateLovedOnes(){
    lovedOnes[0].x = death.x - lovedOnes[0].width;
    lovedOnes[1].x = lovedOnes[0].x - lovedOnes[1].width;
}