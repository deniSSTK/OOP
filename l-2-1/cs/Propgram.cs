using System;

class Program
{
    static void Main(string[] args)
    {
        DigitalString digitalStr = new DigitalString("123456789");

        Console.WriteLine("Строка: " + digitalStr.GetValue());
        Console.WriteLine("Длина строки: " + digitalStr.GetLength());
        Console.WriteLine("Перевернутая строка: " + digitalStr.Reverse());
    }
}