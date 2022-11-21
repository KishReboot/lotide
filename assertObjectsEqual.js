const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // <= add this line

  eqObjects(actual, expected)
    ? console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    : console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

};


module.exports = assertObjectsEqual;

//✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual((ab, ba), false);

const ac = {a: "2", c: "1"};
const ca = {c: "1", a: "2"};

assertObjectsEqual((ac, ca), true);

