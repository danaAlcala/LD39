function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function moveEverything() {
    updateDeathpression();
}
function updateAll() {
    moveEverything();
    drawEverything();
    debug();
}

function setFont(size, font) {
    canvasContext.font = size + "px " + font;
}