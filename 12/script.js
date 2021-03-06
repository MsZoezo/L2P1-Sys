const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let graph, A, B, C, S, l, m;

graph = new GraphBackground(context, "black");
A = new Point(300, 300, 15, "rgba(255,0,0,0.3)", true);
B = new Point(500, 200, 15, "rgba(255,0,0,0.3)", true);
C = new Point(400, 400, 15, "rgba(0,255,0,0.3)", true);
S = new Point(0, 0, 10, "white", false);

l = new LinearFunction(0, 0);
m = new LinearFunction(0, 0);

animmate();

function animmate(){
    requestAnimationFrame(animmate);
    context.clearRect(0, 0, width, height);
    graph.draw();

    l.slope =  (B.y - A.y) / (B.x - A.x);

    l.intercept = B.y - l.slope * B.x;
    drawLine(l, "red");

    m.slope = -1 / l.slope;

    m.intercept = C.y - m.slope * C.x;
    drawLine(m, "green");

    S.x = (m.intercept - l.intercept) / (l.slope - m.slope);
    S.y = l.y(S.x);


    A.draw(context);
    B.draw(context);
    C.draw(context);
    S.draw(context);
}

function drawLine(myLine,color){
    context.beginPath();
    context.lineWidth = "3";
    context.strokeStyle = color
    context.moveTo(0,myLine.y(0));
    context.lineTo(width, myLine.y(width));
    context.closePath();
    context.stroke();

}