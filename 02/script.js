const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let colours = ['#ABDEE6', '#CBAACB', '#FFFFB5', '#FFCCB6', '#F3B0C3']

startAnimation();

function startAnimation() {
	requestAnimationFrame(animate);
}

function animate() {
    context.clearRect(0,0,width,height)
 
    if(Math.random() < 0.1 && points.length < 50){
        let colour = colours[getRandomInt(0, colours.length)];
		let radius = getRandomInt(10, 40);
		
		// We add/remove radius and a little padding so it doesnt go out of frame.
		let posY = getRandomInt(0 + radius + 5, height - radius + 5);
		let posX = getRandomInt(-100, 0 - radius);

		let speed = getRandomInt(1, 10);

        let point = new Point(posX, posY, radius, colour, true, {speed: speed});
        points.push(point);
    }
    
	points.forEach((point, index) => {
		point.x += point.speed;
		point.draw(context);

		if(point.x - point.radius > width) {
			point.x = 0 - point.radius;
		}
	});

	requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
	width = window.innerWidth;
	height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;
});
