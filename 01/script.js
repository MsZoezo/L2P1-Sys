const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 1000;

function drawCircle(point, diameter, lineColour, fillColour) {
	context.strokeStyle = lineColour;
	context.fillStyle = fillColour;
	context.lineWidth = '3';

	context.beginPath();
	context.arc(point.X, point.Y, diameter, 0, 2 * Math.PI);

	context.closePath();
	context.stroke();
	context.fill();
}

function drawShape(points, lineColour, fillColour) {
	let pointsData = [...points];
	context.strokeStyle = lineColour;
	context.fillStyle = fillColour;
	context.lineWidth = '3';

	let beginPoint = pointsData.shift();

	context.beginPath();
	context.moveTo(beginPoint.X, beginPoint.Y);

	pointsData.forEach(point => {
		context.lineTo(point.X, point.Y);
	});

	context.closePath();
	context.stroke();
	context.fill();
}

// Moon
drawCircle({X: 405, Y: 250}, 60, '#DCC995', '#DCC995');
drawCircle({X: 445, Y: 250}, 60, '#070B34', '#070B34');

// Classic Stars 
drawShape([{X: 100, Y: 100}, {X: 150, Y: 100}, {X: 125, Y: 50}], '#DCC995', '#DCC995');
drawShape([{X: 100, Y: 70}, {X: 150, Y: 70}, {X: 125, Y: 120}], '#DCC995', '#DCC995');

drawShape([{X: 500, Y: 250}, {X: 550, Y: 250}, {X: 525, Y: 200}], '#DCC995', '#DCC995');
drawShape([{X: 500, Y: 220}, {X: 550, Y: 220}, {X: 525, Y: 270}], '#DCC995', '#DCC995');

drawShape([{X: 800, Y: 350}, {X: 850, Y: 350}, {X: 825, Y: 300}], '#DCC995', '#DCC995');
drawShape([{X: 800, Y: 320}, {X: 850, Y: 320}, {X: 825, Y: 370}], '#DCC995', '#DCC995');

drawShape([{X: 900, Y: 150}, {X: 950, Y: 150}, {X: 925, Y: 100}], '#DCC995', '#DCC995');
drawShape([{X: 900, Y: 120}, {X: 950, Y: 120}, {X: 925, Y: 170}], '#DCC995', '#DCC995');

drawShape([{X: 350, Y: 125}, {X: 400, Y: 125}, {X: 375, Y: 75}], '#DCC995', '#DCC995');
drawShape([{X: 350, Y: 95}, {X: 400, Y: 95}, {X: 375, Y: 145}], '#DCC995', '#DCC995');

drawShape([{X: 100, Y: 365}, {X: 150, Y: 365}, {X: 125, Y: 315}], '#DCC995', '#DCC995');
drawShape([{X: 100, Y: 335}, {X: 150, Y: 335}, {X: 125, Y: 385}], '#DCC995', '#DCC995');

drawShape([{X: 650, Y: 120}, {X: 700, Y: 120}, {X: 675, Y: 70}], '#DCC995', '#DCC995');
drawShape([{X: 650, Y: 90}, {X: 700, Y: 90}, {X: 675, Y: 140}], '#DCC995', '#DCC995');

// Circle stars
drawCircle({X: 50, Y: 260}, 5, '#DCC995', '#DCC995');
drawCircle({X: 70, Y: 150}, 3, '#DCC995', '#DCC995');
drawCircle({X: 30, Y: 40}, 7, '#DCC995', '#DCC995');
drawCircle({X: 170, Y: 170}, 2, '#DCC995', '#DCC995');
drawCircle({X: 245, Y: 85}, 4, '#DCC995', '#DCC995');
drawCircle({X: 450, Y: 135}, 5, '#DCC995', '#DCC995');
drawCircle({X: 600, Y: 100}, 2, '#DCC995', '#DCC995');
drawCircle({X: 530, Y: 50}, 4, '#DCC995', '#DCC995');
drawCircle({X: 340, Y: 50}, 1, '#DCC995', '#DCC995');
drawCircle({X: 300, Y: 180}, 1, '#DCC995', '#DCC995');
drawCircle({X: 700, Y: 310}, 4, '#DCC995', '#DCC995');
drawCircle({X: 600, Y: 270}, 2, '#DCC995', '#DCC995');
drawCircle({X: 920, Y: 240}, 5, '#DCC995', '#DCC995');
drawCircle({X: 960, Y: 320}, 3, '#DCC995', '#DCC995');
drawCircle({X: 920, Y: 240}, 5, '#DCC995', '#DCC995');
drawCircle({X: 920, Y: 20}, 5, '#DCC995', '#DCC995');
drawCircle({X: 870, Y: 70}, 3, '#DCC995', '#DCC995');
drawCircle({X: 780, Y: 50}, 2, '#DCC995', '#DCC995');
drawCircle({X: 680, Y: 30}, 1, '#DCC995', '#DCC995');

// Cloud 1
drawCircle({X: 130, Y: 315}, 25, '#fff', '#fff');
drawCircle({X: 140, Y: 275}, 30, '#fff', '#fff');
drawCircle({X: 170, Y: 300}, 40, '#fff', '#fff');
drawCircle({X: 220, Y: 260}, 60, '#fff', '#fff');
drawCircle({X: 300, Y: 270}, 45, '#fff', '#fff');
drawCircle({X: 345, Y: 295}, 30, '#fff', '#fff');
drawCircle({X: 370, Y: 315}, 25, '#fff', '#fff');
drawShape([{X: 130, Y: 340}, {X: 370, Y: 340}, {X: 250, Y: 260}], '#FFF', '#FFF');

// Cloud 2
drawCircle({X: 630, Y: 215}, 25, '#fff', '#fff');
drawCircle({X: 640, Y: 175}, 30, '#fff', '#fff');
drawCircle({X: 670, Y: 200}, 40, '#fff', '#fff');
drawCircle({X: 720, Y: 160}, 60, '#fff', '#fff');
drawCircle({X: 800, Y: 170}, 45, '#fff', '#fff');
drawCircle({X: 845, Y: 195}, 30, '#fff', '#fff');
drawCircle({X: 870, Y: 215}, 25, '#fff', '#fff');
drawShape([{X: 630, Y: 240}, {X: 870, Y: 240}, {X: 750, Y: 160}], '#FFF', '#FFF');

// Wall
drawShape([{X: 300, Y: 1000}, {X: 700, Y: 1000}, {X: 700, Y: 600}, {X: 300, Y: 600}], '#CCCCCC', '#CCCCCC');

// Door
drawShape([{X: 550, Y: 1000}, {X: 650, Y: 1000}, {X: 650, Y: 800}, {X: 550, Y: 800}], '#A58658', '#A58658');
drawShape([{X: 560, Y: 1000}, {X: 640, Y: 1000}, {X: 640, Y: 810}, {X: 560, Y: 810}], '#C9AB8F', '#C9AB8F');
drawCircle({X: 575, Y: 910}, 5, '#000', '#000');

// Roof
drawShape([{X: 300, Y: 600}, {X: 700, Y: 600}, {X: 500, Y: 450}], '#CCCCCC', '#CCCCCC');
drawShape([{X: 270, Y: 610}, {X: 280, Y: 620}, {X: 500, Y: 450}, {X: 500, Y: 430}],'#F5D2D3', '#F5D2D3');
drawShape([{X: 730, Y: 610}, {X: 720, Y: 620}, {X: 500, Y: 450}, {X: 500, Y: 430}], '#F5D2D3', '#F5D2D3');

// Story divider
drawShape([{X: 260, Y: 750}, {X: 740, Y: 750}, {X: 740, Y: 740}, {X: 260, Y: 740}], '#F5D2D3', '#F5D2D3');

// Window borders
drawShape([{X: 350, Y: 950}, {X: 500, Y: 950}, {X: 500, Y: 800}, {X: 350, Y: 800}], '#A58658', '#A58658');
drawShape([{X: 350, Y: 700}, {X: 500, Y: 700}, {X: 500, Y: 650}, {X: 350, Y: 650}], '#A58658', '#A58658');
drawShape([{X: 550, Y: 700}, {X: 650, Y: 700}, {X: 650, Y: 650}, {X: 550, Y: 650}], '#A58658', '#A58658');
drawCircle({X: 500, Y: 550}, 40, '#A58658', '#A58658');

const windows = [
	{Type: 'shape', PointData: [{X: 355, Y: 945}, {X: 495, Y: 945}, {X: 495, Y: 805}, {X: 355, Y: 805}]},
	{Type: 'shape', PointData: [{X: 355, Y: 695}, {X: 495, Y: 695}, {X: 495, Y: 655}, {X: 355, Y: 655}]},
	{Type: 'shape', PointData: [{X: 555, Y: 695}, {X: 645, Y: 695}, {X: 645, Y: 655}, {X: 555, Y: 655}]},
	{Type: 'circle', PointData: {X: 500, Y: 550}, Diameter: 35}
];

const colours = ['#BDD0C4', '#9AB7D3', '#F7E1D3', '#DFCCF1'];
let colourPos = 0;

window.setInterval(() => {
	colourPos += 1;
	if(colourPos > colours.length) {
		colourPos = 0;
	}

	let colour = colours[colourPos];

	windows.forEach(window => {
		if(window.Type == 'shape') {
			drawShape(window.PointData, colour, colour);
		} else {
			drawCircle(window.PointData, window.Diameter, colour, colour);
		}
	});
}, 500);
