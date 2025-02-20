mod string_manipulator;

use crate::string_manipulator::StringManipulator;

fn main() {
    let obj = StringManipulator::new(String::from("Denis"));

    println!("\n==== Testing StringManipulator Object ====");
    println!("Created object with value: \"{}\"", obj.get_value().0);
    println!("String length: {}", obj.get_value().1);
    println!("Tuple value: {:?}", obj.get_value());

    println!("\n==== Calling get_length() Method ====");
    println!("Length using get_length(): {}", obj.get_length());

    println!("\n==== Calling Static Method ====");
    let test_string = "Blablabla";
    println!(
        "Length of \"{}\" using static method: {}",
        test_string,
        StringManipulator::get_length_string(test_string)
    );
}