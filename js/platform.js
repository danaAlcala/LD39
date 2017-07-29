var platforms = [];

function Platform(){
    this.width;
    this.height;
    this.x;
    this.y;
    this.exists = true;
}

function updatePlatforms(){
    pit(4);
}

function pit(platformUnits){
    for (i = 39; i >= 0; i--){
        platforms[i].exists = false;
        if (i + platformUnits < 40){
            platforms[i + platformUnits].exists = true;
        }
    }
}