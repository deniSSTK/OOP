using System;

namespace Project
{
    public class StringManipulator
    {
        private readonly string value;

        public StringManipulator(string value)
        {
            this.value = value;
        }

        public static int GetLength(string str)
        {
            return str.Length;
        }

        public static void Main(string[] args)
        {
            Console.Write("Enter a string: ");
            string input = Console.ReadLine();

            int length = GetLength(input);
            Console.WriteLine($"Length of the string: {length}");
        }
    }
}
