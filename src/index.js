import rustWasm from './lib.rs'

rustWasm().then(result => {
  const add = result.instance.exports['add'];
  var message = 'return value was ' + add(2, 3)
  alert(message);
});
