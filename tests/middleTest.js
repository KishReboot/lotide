const assert = require('chai').assert;
const middle   = require('../middle');


describe("#tail", () => {
  
  it("returns an empty array when there are only one or two elements, '[1] or [1, 2]", () => {
    
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);

  });

  it("returns an array with 1 element when there is an odd number of elements, '[1, 2, 3] or [1, 2, 3, 4, 5]", () => {
    
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);

  });

  it("returns an array with 2 elements when there is an even number of elements, '[1, 2, 3] or [1, 2, 3, 4, 5]", () => {
    
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  });

});


  
// For arrays with an even number of elements, an array containing the two
// elements in the middle should be returned
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]