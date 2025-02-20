pub struct StringManipulator {
    value: String,
    length: u8,
}

impl StringManipulator {
    pub fn new(value: String) -> StringManipulator {
        let length_value = value.len() as u8;
        StringManipulator{value, length: length_value}
    }

    pub fn get_value(&self) -> (&String, &u8) {
        (&self.value, &self.length)
    }

    pub fn get_length(&self) -> &u8 {
        &self.length
    }

    pub fn get_length_string(value: &str) -> u8 {
        value.len() as u8
    }
}