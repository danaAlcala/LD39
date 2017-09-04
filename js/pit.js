var pit = [];
var pitCounter = 0;
var currentPit;

function Pit() {
    this.plats = 0;
    this.leftPlatIndex = 0;
    this.startingPlats = 0;
    this.onScreen = false;
}

function sendPit(voidedPlats){
    console.log("sendPit called");
    if (voidedPlats > 0){
        pit[pitCounter] = new Pit;
        pit[pitCounter].plats = voidedPlats;
        pit[pitCounter].leftPlatIndex = platforms.length - 1;
        pit[pitCounter].onScreen = true;
        pitCounter++;
    }
}

function debugPit(){
    if (keyHeld == false){
        if (holdUp){
            sendPit(4);
            console.log(pit[0].leftPlatIndex);
            if (pit[0]){
                for (var i = pitCounter - 1; i >= 0; i--){
                    platforms[pit[i].leftPlatIndex].exists = false;
                }
            }
            for (var i = 0; i < pitCounter; i++){
                pit[i].leftPlatIndex--;
            }
            keyHeld = true;
        }
    }
}

function updatePits(){
    debugPit();
    
}
