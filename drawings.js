/**
 * Created by Hakob on 5/17/2016.
 */

var drawX = function (x, y) {

    var context = canvasElement.getContext("2d");
    context.beginPath();
    context.moveTo(x + padding, y + padding);
    context.lineTo(x + 200 - padding, y + 200 - padding);
    context.moveTo(x + 200 - padding, y + padding);
    context.lineTo(x + padding, y + 200 - padding);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}

var drawO = function (x, y) {

    var context = canvasElement.getContext("2d");

    context.beginPath();
    centerX = x + nodeSize / 2;
    centerY = y + nodeSize / 2;
    context.arc(centerX, centerY, padding, 0, 2 * Math.PI);
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.stroke();

}

function objX(x, y) {
    this.x = x;
    this.y = y;
}

function objO(x, y) {
    this.x = x;
    this.y = y;
}

var objField = function (width, height, boxSize) {
    nodeSize = boxSize;
    var context = canvasElement.getContext("2d");

    context.beginPath();
    context.moveTo(0, 0);
    context.lineWidth = "6";
    context.strokeStyle = "blue";
    context.stroke();

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            context.beginPath();
            context.lineWidth = 6;
            context.strokeStyle = "blue";
            context.rect(i * boxSize, j * boxSize, boxSize, boxSize);
            context.stroke();
        }
    }
}

function drawLine(winnningPair) {
    var context = canvasElement.getContext("2d");
    context.beginPath();
    first   = winningPairs[winnningPair][0];
    second  = winningPairs[winnningPair][1];
    third   = winningPairs[winnningPair][2];
    context.moveTo(first.x * 200+100, first.y * 200+100);
    context.lineTo(second.x * 200+100, second.y * 200+100);
    context.lineTo(third.x * 200+100, third.y * 200+100);
    context.lineWidth = 5;
    context.strokeStyle = "#119561";
    context.stroke();
}

function drawImage(pos) {
    switch (playerId) {
        case 1:
            drawX(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            var obj = new objX(Math.floor(pos.x / 200), Math.floor(pos.y / 200));
            playerId = 2;
            break;
        case 2:
            drawO(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            var obj = new objO(Math.floor(pos.x / 200), Math.floor(pos.y / 200));
            playerId = 1;
            break;
    }
    return obj;
}