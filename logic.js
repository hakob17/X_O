/**
 * Created by Hakob on 5/17/2016.
 */

var winningPairs = [
    [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
    [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
    [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],
    [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}],
    [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
    [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}]
];

var mouseDownCallback = function(e) {
    document.getElementById("error").style.display = "none";
    var pos = getMousePos(canvasElement, e);
    objField(700, 700, 200);
    var positions = {
        x: Math.floor(pos.x / 200),
        y: Math.floor(pos.y / 200)
    }
    if (!searchArray(positions)) {
        var obj = drawImage(pos);
        filledFields.push([positions, obj]);
    } else {
        document.getElementById("error").style.display = "block";
    }
}

var mouseUpCallback = function (e) {
    if (filledFields.length >= 5) {
        var obj = filledFields[filledFields.length - 1][1];
        var instances = findInstances(obj.constructor.name);
        var winningPair = checkWinning(instances);
        if(winningPair !== null) {
            drawLine(winningPair);
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "<h3 class='text-center'>Congratulations!!! " + obj.constructor.name.substr(-1) + " Wins</h3>";
            canvasElement.removeEventListener('mousedown',mouseDownCallback);
        }
    }
}

function checkWinning(instances) {
    var count = 0;
    for (var j = 0; j < winningPairs.length; j++) {
        for (var i = 0; i < instances.length; i++) {
            if(arrayObjectIndexOf(winningPairs[j],filledFields[instances[i]][0]) != -1) {
                count++;
            }
        }
        if(count == 3){
            return j;
        }
        count = 0;
    }
    return null;
};