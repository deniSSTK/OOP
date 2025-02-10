using System;

namespace project
{
    public class StringManipulator
    {
        private readonly string value;

        public StringManipulator(string value)
        {
            this.value = value;
        }

        public static getLenght(string str)
        {
            return str.Length;
        }

        public static void Main(string[] args)
        {
            Console.WriteLine("123");
        }
    }
}