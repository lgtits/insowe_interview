const drawStar = document.querySelector('.draw')

drawStar.addEventListener('click', draw)

function draw() {
  const canvas = document.getElementById('star');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath(); 
    ctx.moveTo(20, 100); 
    ctx.lineTo(130, 100);
    ctx.lineTo(75, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(130, 50);
    ctx.lineTo(75, 125);
    ctx.closePath();
    ctx.stroke();
  } else {
    console.log('draw failed')
  }
}