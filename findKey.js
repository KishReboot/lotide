const assertEqual = require('./assertEqual');

const findKey = (object, cb) => {

  for (let key in object) {

    if (cb(object[key])) {

      return key;

    }

  }

  return undefined;

};

module.exports = findKey;






