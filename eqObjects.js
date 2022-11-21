const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {

  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  
  if (obj1.length === obj2.length) {

    for (let key of obj1) {

      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {

        if (!eqArrays(obj1[key], obj2[key])) {
          
          return false;

        }

      }

    }
    
    return true;

  }
  return false;
};

module.exports = eqObjects;

