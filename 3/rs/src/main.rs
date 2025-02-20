use crate::string_manipulator::StringManipulator;

mod string_manipulator;

fn main() {
    let obj = StringManipulator::from(String::from("java/lang/String"));

    println!("\n==== Testing StringManipulator Object ====");
    println!("Created object with value: \"{}\"", obj.get_value().0);
    println!("String length: {}", obj.get_value().1);
    println!("Tuple value: {:?}", obj.get_value());

    let obj1 = StringManipulator::new();
    println!("\n==== Testing Empty StringManipulator Object ====");
    println!("Created empty object with value: \"{}\"", obj1.get_value().0);
    println!("String length: {}", obj1.get_value().1);
    println!("Tuple value: {:?}", obj1.get_value());

    println!("\n==== Calling Uppercase Method ====");
    println!("Uppercased string: {}", StringManipulator::uppercase(String::from("denis")));

    println!("\n==== Calling Repeat Method ====");
    println!("String repeated 3 times: {}", StringManipulator::repeat(String::from("denis"), 3));

    println!("\n==== Calling Sum Strings Method ====");
    println!("Concatenated strings: {}", StringManipulator::calc_strings(String::from("denis"), String::from("lala")));
}