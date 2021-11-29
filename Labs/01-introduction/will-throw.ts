function f(n = 99) {
  if (n === void 0) {
    n = 99;
  }
  if (n === 0) throw new Error();
  f(n - 1);
}
f();
