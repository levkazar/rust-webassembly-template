(async () => {
  const Rust = await import("../pkg/webassembly_template");
  let message = "return value was " + Rust.add(2, 3);
  alert(message);
})();