using System;

public class Triangle : Figure
{
    private double ax, ay, bx, by, cx, cy;

    public Triangle(double ax, double ay, double bx, double by, double cx, double cy)
    {
        this.ax = ax; this.ay = ay;
        this.bx = bx; this.by = by;
        this.cx = cx; this.cy = cy;
    }

    private double Distance(double x1, double y1, double x2, double y2)
    {
        return Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
    }

    public override double GetPerimeter()
    {
        return Distance(ax, ay, bx, by) +
               Distance(bx, by, cx, cy) +
               Distance(cx, cy, ax, ay);
    }

    public override double GetArea()
    {
        return Math.Abs(
            (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2.0
        );
    }
}
