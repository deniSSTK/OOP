package main

import (
	"fmt"
	"goproject/manipuator"
)

func main() {
	denis := manipuator.NewStringManipulator("denis")
	fmt.Println("--- Create struct ---")
	fmt.Println(denis.ToString())
	fmt.Printf("To right - %s\n", denis.ToRight())
	fmt.Printf("%s\n\n", denis.ToStringAll())

	denis.Clear()
	fmt.Println("--- After clear method ---")
	fmt.Println(denis.ToString())
	fmt.Printf("%s\n\n", denis.ToStringAll())

	short := manipuator.NewStringManipulator("go")
	fmt.Println("--- Second example ---")
	fmt.Println(short.ToString())
	fmt.Printf("To right - %s\n", short.ToRight())
	fmt.Printf("%s\n\n", short.ToStringAll())

	custom := manipuator.Copy(short)
	fmt.Println("--- Copy example ---")
	fmt.Println(custom.ToString())
	fmt.Printf("To right - %s\n", custom.ToRight())
	fmt.Printf("%s\n\n", custom.ToStringAll())

	nullString := manipuator.NewStringManipulatorNull()
	fmt.Println("--- NewStringManipulatorNull example ---")
	fmt.Println(nullString.ToString())
	fmt.Printf("Length: %d\n", nullString.GetLength())
}
