#[macro_use]
extern crate stdweb;

fn add(a: i32, b: i32) -> i32 {
  eprintln!("add({:?}, {:?}) was called", a, b);
  a + b
}

fn main() {
  stdweb::initialize();

  js! {
      Module.exports.add = @{add};
  }
}
