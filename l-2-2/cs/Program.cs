using System;

class Program
{
    static void PrintFigureInfo(Figure figure)
    {
        Console.WriteLine("Area: " + figure.GetArea());
        Console.WriteLine("Perimeter: " + figure.GetPerimeter());
    }

    static void Main(string[] args)
    {
        Figure triangle = new Triangle(0, 0, 4, 0, 0, 3);
        Figure circle = new Circle(5);

        Console.WriteLine("=== Triangle ===");
        PrintFigureInfo(triangle);

        Console.WriteLine("\n=== Circle ===");
        PrintFigureInfo(circle);
    }
}
