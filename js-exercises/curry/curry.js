function curry(func) {
  return (...args) => {
    if (func.length === 1) return func(args[0]);
    if (func.length === 2) return b => func(args[0], b);
    if (func.length === 3 && args.length === 2)
      return b => func(args[0], args[1], b);
    if (func.length === 3) return b => c => func(args[0], b, c);
    if (func.length === 4) return b => c => d => func(args[0], b, c, d);
  };
}

export { curry };
