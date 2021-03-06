var keyHeld = false; // Key handling

function setKeyHoldState(thisKey, setTo) {
    if (thisKey == KEY_LEFT_ARROW) {
        holdLeft = setTo;
    }
    if (thisKey == KEY_RIGHT_ARROW) {
        holdRight = setTo;
    }
    if (thisKey == KEY_UP_ARROW) {
        holdUp = setTo;
    }
    if (thisKey == KEY_DOWN_ARROW) {
        holdDown = setTo;
    }
}

function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); // without this, arrow keys scroll the browser!
}
function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
    keyHeld = false;
}
function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}