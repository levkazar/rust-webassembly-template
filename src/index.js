import * as Rust from './lib.rs'

(async () => {
  try {
    const lib = await Rust();
    const add = lib.instance.exports['add'];
    let message = 'return value was ' + add(2, 3)
    alert(message);
  } catch (e) {
    alert(e);
  }
})();