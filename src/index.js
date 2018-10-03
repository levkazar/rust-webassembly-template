import Rust from './index.rs';

Rust.then(rustLib => {
  let message = 'return value was ' + rustLib.add(2, 3);
  alert(message);
});
