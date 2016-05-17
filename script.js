var padding = 50;
var nodeSize;
var canvasElement = document.getElementById("myCanvas");
var filledFields = [];
var playerId = 1;
var run = function () {
    objField(700, 700, 200);
}

$(document).ready(function () {

    run();
    canvasElement.addEventListener('mousedown', mouseDownCallback);

    canvasElement.addEventListener("mouseup", mouseUpCallback);
})