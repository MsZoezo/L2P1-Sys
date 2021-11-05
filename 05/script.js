// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');

// const width = window.innerWidth;
// const height = window.innerHeight;

// canvas.width = width;
// canvas.height = height;

// const background = new GraphBackground(context, '#ffd1dc');

// let A = new Point(100, 100, 20, "pink", true);
// let B = new Point(200, 200, 20, "red", true);

// animate();

// function animate(){
//     requestAnimationFrame(animate)
//     context.clearRect(0,0,width,height);
//     background.draw();

// //     context.beginPath();
// //     context.fillStyle = "#daeaf660"
// //     context.moveTo(polygons[0].x,polygons[0].y);

// //     polygons.map(polygon => context.lineTo(polygon.x,polygon.y));

// //     context.closePath();
// //     context.fill();
// //     context.stroke();
    
// //     polygons.map(p => p.draw(context));

// 	A.draw(context);
// 	B.draw(context);
	
// 	context.beginPath();
// 	context.fillStyle = "#daeaf660";
// 	context.lineWidth = 5;
// 	context.moveTo(A.x, A.y);
// 	context.lineTo(B.x, B.y);

// 	context.closePath();
//     context.stroke();

// }

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let A,B,background,l;

A = new Point(200, 200, 20, "pink", true);
B = new Point(500, 300, 20, "red", true);

C = new Point(10, 10, 15, "white", false);
D = new Point(30, 10, 15, "white", false);

l = new LinearFunction(-1, 400);

background = new GraphBackground(context, '#ffd1dc');

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    background.draw();
    A.draw(context);
    B.draw(context);

    l.slope = (A.y - B.y)/(A.x - B.x);
    l.intercept = A.y -l.slope* A.x;

    C.x = 0;
    C.y = l.y(0);
    D.x = width;
    D.y = l.y(width);

    context.beginPath();
    context.moveTo(C.x,C.y);
    context.lineTo(D.x,D.y);
    context.closePath();
    context.stroke();

    C.draw(context);
    D.draw(context);
}
