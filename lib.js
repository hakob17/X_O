/**
 * Created by Hakob on 5/17/2016.
 */

var arrayObjectIndexOf = function(myArray, searchTerm) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (JSON.stringify(myArray[i]) === JSON.stringify(searchTerm)) return i;
    }
    return -1;
};

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};

function searchArray(pos) {
    for (var i = 0; i < filledFields.length; i++) {
        if (filledFields[i][0].x == pos.x && filledFields[i][0].y == pos.y) {
            return true;
        }
    }
    return false;
};

function findInstances(name) {
    var indexs = [];
    for (var i = 0; i < filledFields.length; i++) {
        if (filledFields[i][1].constructor.name == name) {
            indexs.push(i);
        }
    }
    return indexs;
};

function areEqual(obj1, obj2) {
    if (obj1.x == obj2.x && obj1.y == obj2.y) {
        return true;
    }

    return false;
};