var pit = [];
var pitCounter = 0;

function Pit() {
    this.plats = 0;
    this.firstPlat = 0;
    this.startingPlat = 0;
    this.onScreen = false;
}

function sendPit(plats){
    pitCounter++;
    pit[pitCounter] = new Pit;
    pit[pitCounter].firstPlat = lastPlatIndex;
    pit[pitCounter].plats = plats;
    pit[pitCounter].startingPlats = plats;
}

function updatePits(){
    if (frameCounter % 10 == 0){
        sendPit(8);
    }
    for (var i = pitCounter; i > 0; i --){
        if (pit[i].onScreen = true && pit[i].firstPlat > 0){
            platforms[pit[i].firstPlat].exists = false;
            pit[i].firstPlat --;
            pit[i].plats --;
        }
        if (pit[i].firstPlat < 0 && pit[i].plats <= 0){
            pit[i].onScreen = false;
            pitCounter --;
            pit.shift;
        }
        if (pit[i].onScreen && pit[i].plats < 0){
            platforms[pit[i].firstPlat + pit[i].startingPlats].exists = true;
        }
    }
}