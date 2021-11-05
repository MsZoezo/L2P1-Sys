class GraphBackground {
	context;
	colour;
	width;
	height;

	constructor(context, colour) {
		this.context = context;
		this.colour = colour;

		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	draw() {
		this.context.strokeStyle = this.colour;

		for(let i = 0; i < this.height; i++) {
            if((i % 20) != 0) continue;

            this.context.beginPath();

            if (i%100 == 0) this.context.lineWidth = "5";
            else this.context.lineWidth = "1";
                
            this.context.moveTo(0,i);
            this.context.lineTo(this.width,i);
            this.context.stroke();
            this.context.closePath();
        }             

        for(let i = 0; i < this.width; i++) {
            if((i % 20) != 0) continue;
			
            this.context.beginPath();

            if (i%100 == 0) this.context.lineWidth = "5";
            else this.context.lineWidth = "1";
                
            this.context.moveTo(i,0);
            this.context.lineTo(i,this.height);
            this.context.stroke();
            this.context.closePath();          
        }
    }
}
