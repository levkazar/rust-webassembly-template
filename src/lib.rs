extern crate cfg_if;
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  eprintln!("add({:?}, {:?}) was called", a, b);
  a + b
}