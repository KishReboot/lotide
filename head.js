const assertEqual = require('./assertEqual');

const head = (arr) => {

  if (arr !== []) return arr[0];
  if (arr === []) return undefined;
};

module.exports = head;

