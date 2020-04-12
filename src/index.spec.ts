export const commonTestsFrom = function commonTestsFrom(base: string) {
  return [{
    input: `-${base[1]}`,
    output: -1,
  }, {
    input: base[0],
    output: 0,
  }, {
    input: base[1],
    output: 1,
  }, {
    input: base[base.length - 1],
    output: base.length - 1,
  }, {
    input: base[1] + base[0],
    output: base.length,
  }];
};

export const commonTestsTo = function commonTestsTo(base: string) {
  return [{
    input: -1,
    output: `-${base[1]}`,
  }, {
    input: 0,
    output: base[0],
  }, {
    input: 1,
    output: base[1],
  }, {
    input: base.length - 1,
    output: base[base.length - 1],
  }, {
    input: base.length,
    output: base[1] + base[0],
  }];
};
