document.addEventListener("DOMContentLoaded", function(){

});
//
// let canvas = document.getElementById('mycanvas');
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'lime';
// ctx.fillRect(100,100,300,300);
//
// ctx.beginPath();
// ctx.arc(250,250,150,Math.PI * .5 -3, Math.PI * .5 +3);
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 20;
// ctx.stroke();
//
// ctx.fillStyle = 'orange';
// ctx.fill();
//
// ctx.beginPath();
// ctx.arc(250,250,100,2.5,-2.5);
// ctx.strokeStyle = 'lime';
// ctx.lineWidth = 10;
// ctx.stroke();
// ctx.fillStyle = 'blue';
// ctx.fill();
//
//
// ctx.beginPath();
// ctx.arc(250,250,100,0,2.5);
// ctx.strokeStyle = 'lime';
// ctx.lineWidth = 10;
// ctx.stroke();
//
// ctx.fillStyle = 'blue';
// ctx.fill();
//
// ctx.beginPath();
// ctx.arc(250,250,100,3.77,0);
// ctx.strokeStyle = 'lime';
// ctx.lineWidth = 10;
// ctx.stroke();
//
// ctx.fillStyle = 'blue';
// ctx.fill();
//
// ctx.beginPath();
// ctx.moveTo(250,250);
// ctx.bezierCurveTo(200,200,300,300,180,180);
// ctx.bezierCurveTo(200,200,300,300,220,280);
// ctx.bezierCurveTo(200,200,300,300,280,220);
// ctx.bezierCurveTo(200,200,300,300,220,280);
// ctx.lineWidth  =5;
// ctx.strokeStyle = 'white';
// ctx.stroke();
// ctx.fillStyle = 'black';
// ctx.fill();
//
// ctx.clearRect(200,200,100,100);

// animation attempt
let pika = new Image();
let greeny = new Image();

function init() {
  pika.src = 'https://avatars.mds.yandex.net/get-pdb/70729/91d93f8f-5278-4760-8b54-d5c8269982b4/s800';
  greeny.src = 'http://icons.iconarchive.com/icons/iconka/easter-egg-bunny/256/green-cute-icon.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  let ctx = document.getElementById('mycanvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,500,500);
  ctx.fillStyle = 'lime';
  ctx.strokeStyle = 'blue';
  ctx.save();
  // ctx.translate(100,100);

  let time = new Date();
  ctx.rotate(((.02 * Math.PI) / 60) *time.getMilliseconds())
  ctx.fillRect(50,50,50,24);
  ctx.drawImage(greeny,50,50);

  ctx.restore();
  ctx.drawImage(pika, -30,-30);
  // ctx.restore();


  window.requestAnimationFrame(draw);
}

init();
