pub struct StringManipulator {
    value: String,
    length: u16,
}

impl StringManipulator {
    pub fn from(value: String) -> StringManipulator {
        let length = value.len() as u16;
        StringManipulator{value, length}
    }
    pub fn new() -> StringManipulator {
        StringManipulator{value: String::new(), length: 0}
    }
    pub fn get_value(&self) -> (&String, &u16) {
        (&self.value, &self.length)
    }
    pub fn uppercase(value: String) -> String {
        value.to_uppercase()
    }
    pub fn repeat(value: String, n: u16) -> String {
        value.repeat(n as usize)
    }
    pub fn calc_strings(str1: String, str2: String) -> String {
        format!("{}{}", str1, str2)
    }
}