package manipuator

import "fmt"

type stringManipulator struct {
	value  string
	length int
}

func (sm *stringManipulator) ToString() string {
	return fmt.Sprintf("Value: %s", sm.value)
}

func (sm *stringManipulator) ToStringAll() string {
	return fmt.Sprintf("Value: %s, Lenght: %d", sm.value, sm.length)
}

func (sm *stringManipulator) Clear() {
	sm.value = ""
	sm.length = 0
}

func (sm *stringManipulator) GetValue() string {
	return sm.value
}

func (sm *stringManipulator) GetLength() int {
	return sm.length
}

func (sm *stringManipulator) ChangeValue(value string) {
	sm.value = value
	sm.length = len(sm.value)
}

func (sm *stringManipulator) ToRight() string {
	if len(sm.value) <= 1 {
		return sm.value
	} else {
		return fmt.Sprint(sm.value[len(sm.value)-1:], sm.value[:len(sm.value)-1])
	}
}

func NewStringManipulator(value string) *stringManipulator {
	return &stringManipulator{value: value, length: len(value)}
}

func NewStringManipulatorNoLength(value string) *stringManipulator {
	return &stringManipulator{value: value}
}
