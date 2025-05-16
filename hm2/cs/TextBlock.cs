using System;
using System.Linq;

class TextBlock
{
    private string[] lines;

    public TextBlock(string[] lines)
    {
        this.lines = lines;
    }

    public int this[int index]
    {
        get
        {
            if (index >= 0 && index < lines.Length)
                return lines[index].Length;
            throw new IndexOutOfRangeException("Індекс за межами масиву.");
        }
    }

    public int VowelCount
    {
        get
        {
            string allText = string.Join("", lines);
            string vowels = "aeiouаеєиіїоуюяAEIOUАЕЄИІЇОУЮЯ";
            return allText.Count(c => vowels.Contains(c));
        }
    }
}