using System;
using System.Collections.Generic;
using System.Linq;

public class TextContainer
{
    private List<TextRow> rows = new List<TextRow>();

    public void AddRow(TextRow row)
    {
        rows.Add(row);
    }

    public void RemoveRow(int index)
    {
        if (index >= 0 && index < rows.Count)
            rows.RemoveAt(index);
    }

    public void RemoveRowsContaining(string substring)
    {
        rows = rows.Where(row => !row.GetContent().Contains(substring)).ToList();
    }

    public void Clear()
    {
        rows.Clear();
    }

    public int GetLongestRowLength()
    {
        if (rows.Count == 0) return 0;
        return rows.Max(row => row.GetLength());
    }

    public void CapitalizeAllRows()
    {
        foreach (var row in rows)
        {
            row.CapitalizeWords();
        }
    }

    public List<string> GetAllRows()
    {
        return rows.Select(row => row.GetContent()).ToList();
    }
}
