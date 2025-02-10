class Vector {
    readonly x0: number;
    readonly y0: number;
    readonly componentX: number;
    readonly componentY: number;

    readonly xEnd: number;
    readonly yEnd: number;
    readonly r: number;
    readonly theta: number;

    constructor(x0: number, y0: number, componentX: number, componentY: number) {
        this.x0 = x0;
        this.y0 = y0;
        this.componentX = componentX;
        this.componentY = componentY;

        this.xEnd = this.x0 + this.componentX;
        this.yEnd = this.y0 + this.componentY;

        this.r = Math.sqrt(this.componentX ** 2 + this.componentY ** 2);
        this.theta = Math.atan2(this.componentX, this.componentY);
    };

    public display() {
        return {
            x0: this.x0,
            y0: this.y0,
            componentX: this.componentX,
            componentY: this.componentY,
            xEnd: this.xEnd,
            yEnd: this.yEnd,
            r: this.r,
            theta: this.theta
        }
    }

    static getEndCoordinates(x0: number, y0: number, componentX: number, componentY: number): {x: number, y: number} {
        return {x: (x0 + componentX), y: (y0 + componentY)};
    };

    static toPolar(x: number, y: number): {r: number, theta: number} {
        return {
            r: Math.sqrt(x ** 2 + y ** 2),
            theta: Math.atan2(x, y)
        }
    }
}