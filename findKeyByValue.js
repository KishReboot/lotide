const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {

  for (let key in object) {

    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

