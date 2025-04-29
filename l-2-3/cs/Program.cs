using System;

class Program
{
    static void Main(string[] args)
    {
        TextContainer container = new TextContainer();

        container.AddRow(new TextRow("hello world"));
        container.AddRow(new TextRow("this is csharp"));
        container.AddRow(new TextRow("object oriented programming"));

        Console.WriteLine("Original rows:");
        foreach (var row in container.GetAllRows())
        {
            Console.WriteLine(row);
        }

        container.CapitalizeAllRows();

        Console.WriteLine("\nAfter capitalizing first letters:");
        foreach (var row in container.GetAllRows())
        {
            Console.WriteLine(row);
        }

        Console.WriteLine("\nLongest row length: " + container.GetLongestRowLength());

        container.RemoveRowsContaining("csharp");

        Console.WriteLine("\nAfter removing rows containing 'csharp':");
        foreach (var row in container.GetAllRows())
        {
            Console.WriteLine(row);
        }

        container.Clear();

        Console.WriteLine("\nAfter clearing:");
        foreach (var row in container.GetAllRows())
        {
            Console.WriteLine(row);
        }
    }
}
