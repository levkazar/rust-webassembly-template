import * as Rust from "./index.rs";

(async () => {
  try {
    const lib = await Rust;
    let message = "return value was " + lib.add(2, 3);
    alert(message);
  } catch (e) {
    alert(e);
  }
})();
