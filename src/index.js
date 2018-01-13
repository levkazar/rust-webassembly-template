import Rust from './index.rs';

Rust.then(rustLib => {
  console.log('return value was', rustLib.add(2, 3));
});
