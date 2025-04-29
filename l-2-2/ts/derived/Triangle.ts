import { Figure } from "../base/Figure";

export class Triangle extends Figure {
    private ax: number;
    private ay: number;
    private bx: number;
    private by: number;
    private cx: number;
    private cy: number;

    constructor(ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
        super();
        this.ax = ax; this.ay = ay;
        this.bx = bx; this.by = by;
        this.cx = cx; this.cy = cy;
    }

    private distance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    }

    getPerimeter(): number {
        return this.distance(this.ax, this.ay, this.bx, this.by) +
            this.distance(this.bx, this.by, this.cx, this.cy) +
            this.distance(this.cx, this.cy, this.ax, this.ay);
    }

    getArea(): number {
        return Math.abs(
            (this.ax * (this.by - this.cy) + this.bx * (this.cy - this.ay) + this.cx * (this.ay - this.by)) / 2
        );
    }
}
