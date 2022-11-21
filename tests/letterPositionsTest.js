const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [3]);
assertArraysEqual(letterPositions("hello").l, [3]);
assertArraysEqual(letterPositions("hello").o, [4]);

assertArraysEqual(letterPositions("sojourn").s, [0]);
assertArraysEqual(letterPositions("sojourn").o, [3]);
assertArraysEqual(letterPositions("sojourn").j, [2]);
assertArraysEqual(letterPositions("sojourn").o, [3]);
assertArraysEqual(letterPositions("sojourn").u, [4]);