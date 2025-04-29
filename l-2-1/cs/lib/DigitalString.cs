public class DigitalString : StringBase
{
    public DigitalString(string value) : base(value) { }

    public string Reverse()
    {
        char[] array = value.ToCharArray();
        System.Array.Reverse(array);
        return new string(array);
    }
}