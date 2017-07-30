function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    updateDeathpression();
    updateLovedOnes();
    updatePits();
}
function updateAll() {
    updateFrameCounter();
    moveEverything();
    drawEverything();
    debug();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}