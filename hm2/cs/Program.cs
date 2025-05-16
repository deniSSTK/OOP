class Program
{
    static void Main()
    {
        var text = new TextBlock(new string[]
        {
            "Це перший рядок.",
            "Другий рядок.",
            "Третій."
        });

        Console.WriteLine(text[0]);
        Console.WriteLine(text.VowelCount);
    }
}
