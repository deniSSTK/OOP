public class StringBase
{
    protected string value;

    public StringBase(string value)
    {
        this.value = value;
    }

    public string GetValue()
    {
        return value;
    }

    public int GetLength()
    {
        return value.Length;
    }
}