var padding = 50;
var nodeSize;
var canvasElement = document.getElementById("myCanvas");
var filledFields = [];
var playerId = 1;

var winningPairs = [
    [{r:0,c:0},{r:0,c:1},{r:0,c:2}],
    [{r:1,c:0},{r:1,c:1},{r:1,c:2}],
    [{r:2,c:0},{r:2,c:1},{r:2,c:2}],
    [{r:0,c:0},{r:1,c:0},{r:2,c:0}],
    [{r:0,c:1},{r:1,c:1},{r:2,c:1}],
    [{r:0,c:2},{r:1,c:2},{r:2,c:2}],
    [{r:0,c:0},{r:1,c:1},{r:2,c:2}],
    [{r:2,c:0},{r:1,c:1},{r:0,c:2}]
];

drawX = function (x, y) {

    var context = canvasElement.getContext("2d");
    console.log(x + padding, y + padding)
    context.beginPath();
    context.moveTo(x + padding, y + padding);
    context.lineTo(x + 200 - padding, y + 200 - padding);
    context.moveTo(x + 200 - padding, y + padding);
    context.lineTo(x + padding, y + 200 - padding);
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}

drawO = function (x, y) {

    //console.log(x,y)
    var context = canvasElement.getContext("2d");

    context.beginPath();
    centerX = x + nodeSize / 2;
    centerY = y + nodeSize / 2;
    console.log(centerX, centerY)
    context.arc(centerX, centerY, padding, 0, 2 * Math.PI);
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.stroke();

}

var objX = function(x,y) {
    this.x = x;
    this.y = y;
}

var objO = function(x,y) {
    this.x = x;
    this.y = y;
}

objField = function (width, height, boxSize) {
    nodeSize = boxSize;
    var context = canvasElement.getContext("2d");

    context.beginPath();
    context.moveTo(0,0);
    context.lineWidth = "6";
    context.strokeStyle = "blue";
    //context.rect(0, 0, 700, 700);
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


var run = function () {


    objField(700, 700, 200);
}

canvasElement.addEventListener('mousedown', function (e) {

    document.getElementById("error").style.display = "none";
    var pos = getMousePos(canvasElement, e);
    console.log(filledFields);
    objField(700, 700, 200);
    var positions = {
        x: Math.floor(pos.x / 200) * 200,
        y: Math.floor(pos.y / 200) * 200
    }
    if(!searchArray(positions) && (positions.x < 600 && positions.y < 600)) {
        var obj = drawImage(pos);
        filledFields.push([positions,obj]);
    }else {
        document.getElementById("error").style.display = "block";
    }

})
canvasElement.addEventListener("mouseup", function (e) {
    if(filledFields.length>=5) {
        var obj = filledFields[filledFields.length-1][1];
        if(obj instanceof objO) {

        }
    }
});
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    console.log(evt.clientX - rect.left,evt.clientY - rect.top)
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function drawImage(pos) {
    switch (playerId) {
        case 1:
            drawX(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            var obj = new objX(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            playerId = 2;
            break;
        case 2:
            drawO(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            var obj = new objO(Math.floor(pos.x / 200) * 200, Math.floor(pos.y / 200) * 200);
            playerId = 1;
            break;
    }
    return obj;
}

function searchArray(pos) {
    for(var i = 0; i < filledFields.length; i++) {
        if (filledFields[i][0].x == pos.x && filledFields[i][0].y == pos.y) {
            return true;
        }
    }
    return false;
}

function findInstances(obj) {
    for(var i = 0; i < filledFields.length; i++) {
        if (filledFields[i][1].x == pos.x && filledFields[i][1].y == pos.y) {
            return true;
        }
    }
    return false;
}
run();