function* count(start = 0, step = 1) {
  let value = start;
  while (true) {
    yield value;
    value += step;
  }
}

function* cycle(iter, noOfTimes = Infinity) {
  while (noOfTimes) {
    yield* iter;
    noOfTimes -= 1;
  }
}

function* repeat(value, noOfTines = Infinity) {
  yield* cycle([value], noOfTines);
}

export { count, cycle, repeat };
