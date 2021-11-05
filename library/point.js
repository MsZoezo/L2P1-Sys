class Point {
    constructor(x, y, radius, color, draggable, options = {}){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.draggable = draggable || false;

		if(options['speed'] !== undefined) {
			this.speed = options['speed'];
		}

        if(draggable){
            this.drag();
        }
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.closePath();
        context.stroke();
        context.fill();
    }

    drag(){
        let distance = Infinity;
        let dragging = false;

       addEventListener('mousedown',(e) => {
           let dx = e.clientX - this.x;
           let dy = e.clientY - this.y;
           distance = Math.sqrt(dx * dx + dy *dy); 
           if(distance< this.radius){
               dragging = true;
           }
       })

       addEventListener('mousemove',(e)=>{
           if(dragging){
               this.x = e.clientX;
               this.y = e.clientY;
           }
       })

       addEventListener('mouseup',() =>{
           dragging = false;
       })
    }

    distanceTo(xm,ym){
        let dx = xm - this.x;
        let dy = ym - this.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
