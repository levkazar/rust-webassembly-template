[![Build Status](https://travis-ci.org/levkazar/rust-webassembly-template.svg?branch=wasmPack)](https://travis-ci.org/levkazar/rust-webassembly-template)
# A template for Rust Webassembly, using Webpack
This template is configured for compilation with `wasm-pack`.

## Prerequisites
- webpack and yarn are globally available.
- rust is globally available.

## First time installation of rustup nightly
1. `rustup toolchain install nightly`
3. `rustup target add wasm32-unknown-unknown --toolchain nightly`
4. `rustup default nightly`

## Install wasm-pack
https://rustwasm.github.io/wasm-pack/installer/

## Create new rust project using this template
1. Fork this repository
5. `yarn install` to install npm dependencies.
6. `src/index.js` is the entry point for webpack.
7. Rust library code goes to `src/lib.rs`
8. `npm run compile` to run wasm-pack once. Output is compiled to `pkg`.
9. `npm run webpack` to run webpack once. Output is compiled to `dist`.
10. `npm run serve` to start the local test server, serving from `dist`.