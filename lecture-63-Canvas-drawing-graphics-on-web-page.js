var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 380, 280);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.strokeRect(8, 8, 378, 276);







// circle draw


var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
