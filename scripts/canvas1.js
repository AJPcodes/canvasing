var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

function draw() {

    // ctx.fillRect(25,25,100,100);
    // ctx.clearRect(45,45,60,60);
    // ctx.fillRect(50,50,50,50);

    for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ', 0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }


}


draw();