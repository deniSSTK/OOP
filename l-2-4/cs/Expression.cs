using System;

public class Expression
{
    private double a;
    private double b;

    public Expression(double a, double b)
    {
        this.a = a;
        this.b = b;
    }

    public (double, double) GetValues() => (a, b);

    public double Calculate()
    {
        if (b == 0)
            throw new ExpressionException("Ділення на нуль заборонено.");
        return a / b;
    }

    public double GetSqrtOfA()
    {
        if (a < 0)
            throw new ExpressionException("Корінь з від’ємного числа неможливий.");
        return Math.Sqrt(a);
    }
}
