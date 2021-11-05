const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const background = new GraphBackground(context, '#ffd1dc');
let polygons = [];
let numberOfPoints = 13;

for(let i = 0; i<numberOfPoints; i++){
    let point = new Point(Math.random()*width, Math.random()*height, 15, '#e8dff5', true);
    polygons.push(point);
}

animate();

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height);
    background.draw();

    context.beginPath();
    context.fillStyle = "#daeaf660"
    context.moveTo(polygons[0].x,polygons[0].y);

    polygons.map(polygon => context.lineTo(polygon.x,polygon.y));

    context.closePath();
    context.fill();
    context.stroke();
    
    polygons.map(p => p.draw(context));
}
