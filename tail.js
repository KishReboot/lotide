const assertEqual = require('./assertEqual');

const tail = (arr) => {
  let results = [];

  if (arr.length <= 1) {

    return results;

  }

  return arr.slice(1);

};

module.exports = tail;
