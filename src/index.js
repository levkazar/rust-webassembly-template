import rust from './index.rs';

rust.then(lib => {
  console.log('return value was', lib.add(2, 3));
});
