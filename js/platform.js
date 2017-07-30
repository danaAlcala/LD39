var platforms = [];
var lastPlatform = 39;
var platformIndex = 39;
var pitIndex = 30;
var rebuildIndex = 0;


function Platform(){
    this.width;
    this.height;
    this.x;
    this.y;
    this.exists = true;
}
function pit(platformUnits){
    if (platformUnits > 0){
        if (platforms[platformIndex].exists){
            platforms[platformIndex].exists = false;
            platformIndex --;
            pitIndex --;
            rebuildIndex ++;
        }
    }
    
}
function rebuild(){
    if (rebuildIndex > 0){
        platforms[lastPlatform].exists = true;
        //platforms[lastPlatform - rebuildIndex].exists = false;
        lastPlatform --;
        rebuildIndex --;
    }
    if (rebuildIndex = 0 && lastPlatform >= 0){
        platforms[lastPlatform].exists = false;
        lastPlatform --;
    }
}
function updatePlatforms(){
    if (platformIndex > 0){
        pit(pitIndex);
    }
    if (rebuildIndex > pitIndex){
        rebuild();
    }
}

