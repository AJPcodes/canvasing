var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');

function draw() {

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.fillRect(50,50,50,50);
}

draw();