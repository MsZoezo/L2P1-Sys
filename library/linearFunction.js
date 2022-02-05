class LinearFunction {
    constructor(slope, intercept){
        this.slope = slope;
        this.intercept = intercept;
    }

    y(x){
        return this.slope * x + this.intercept;
    }

    lineThroughTwoPoints(P,Q){
        let run = Q.x - P.x;
        let rise = Q.y - P.y;
        this.slope = rise / run;

        this.intercept = P.y - this.slope * P.x;
    }

    draw(context, color = "black"){
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = "4";
        context.moveTo(0, this.y(0));
        context.lineTo(width, this.y(width));
        context.closePath();
        context.stroke();
    }

    intersection(l){
        let S = {};
        S.x = (this.intercept - l.intercept) / (l.slope - this.slope);
        S.y = this.y(S.x);
        return S;
    }
}
