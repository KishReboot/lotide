const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {

    assert.strictEqual(head([1, 2, 3]), 1);

  });

  it("returns '5' for ['5']", () => {

    assert.strictEqual(head(['5']), '5');
  
  });

  it("returns '5' for ['5', '6', '7']", () => {

    assert.deepEqual(head([5, 6, 7]), 5);
  
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {

    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  
  });

  it("returns '1' for [1]", () => {

    assert.deepEqual(head([1]), 1);
  
  });

  it("returns 'undefined' for an array with two elements or less [1, 2] or []", () => {

    return undefined;
  
  });

});
