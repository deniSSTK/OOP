using System;

class Program
{
    static void Main()
    {
        Expression[] expressions = {
            new Expression(10, 2),
            new Expression(5, 0),
            new Expression(-4, 1)
        };

        for (int i = 0; i < expressions.Length; i++)
        {
            var (a, b) = expressions[i].GetValues();
            Console.WriteLine($"Expression {i + 1}: a = {a}, b = {b}");

            try
            {
                double result = expressions[i].Calculate();
                Console.WriteLine($"Result: {result}");
            }
            catch (ExpressionException ex)
            {
                Console.WriteLine($"Помилка обчислення: {ex.Message}");
            }

            try
            {
                double sqrt = expressions[i].GetSqrtOfA();
                Console.WriteLine($"Квадратний корінь з a: {sqrt}");
            }
            catch (ExpressionException ex)
            {
                Console.WriteLine($"Помилка кореня: {ex.Message}");
            }

            Console.WriteLine();
        }
    }
}
