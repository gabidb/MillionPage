// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
}

//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for(var i=0; i<1000;i+=10){
    for(var j=0;j<1000;j+=10){
        ctx.fillStyle = getRandomColor()
        ctx.fillRect(i, j, 10, 10);
    }
}

//The rectangle should have x,y,width,height properties
var rect = {
    x:0,
    y:0,
    width:100,
    height:100
};

//Binding the click event on the canvas
c.addEventListener('click', function(evt) {
    var mousePos = getMousePos(c, evt);
    ctx.fillStyle = "#000000"
    ctx.fillRect(mousePos.x-(mousePos.x % 10), mousePos.y-(mousePos.y % 10), 10 ,10)
}, false);
