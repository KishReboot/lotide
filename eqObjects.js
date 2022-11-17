const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {

    if (arr1.length !== arr2.length) return false;

    if (arr1[i] !== arr2[i])  return false;

  }
  
  return true;
};

const assertEqual = (actual, expected) => {

  actual !== expected
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/* (TIPS) Object.keys => compare length of both objects
 * if !==, return false
 * loop through the key returned, for *one* object
 * then, if obj1Key === obj2Key
 * Primitive Values
 * Next, edit to work with objects
 */

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), true); // => false