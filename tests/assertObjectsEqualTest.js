const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual((ab, ba), false);

const ac = {a: "2", c: "1"};
const ca = {c: "1", a: "2"};

assertObjectsEqual((ac, ca), true);