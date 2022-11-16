const assertEqual = (actual, expected) => {

  actual !== expected
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

// The function should take in a sentence (as a string) and then return a count
// of each of the letters in that sentence.
// You can use for...of loops with strings.
// Similar to countOnly.js assignment

/* create empty object
 * loop through array (for( _ of _))
 * Used toLowercase() to return strings to lowercase
 * Used .replace to remove spaces, commas, ?'s and !'s
 * from the count/outputs
 * if letter is not already in the object, add key and add 1
 * if letter is already counted, but is there again, increment 1
 * return the result
 */

const countLetters = (str) => {
  
  const result = {};
  lowerCaseStr = str.toLowerCase().replace(/[ ,.?!]/g, "");
  
  for (let letter of lowerCaseStr) {

    if (!result[letter]) result[letter] = 1;
    
    else result[letter]++;
    
  }

  return result;

};


console.log(countLetters('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'));
console.log(countLetters('LHL'));
console.log(countLetters('I am the night, I am vengeance. I, am, the Batman.'));
console.log(countLetters('Matt Mercer is the coolest voice actor.'));
console.log(countLetters('Am I the best!?'));
console.log(countLetters('I am a dirty Sojourn main, give me freelo.'));
console.log(countLetters('The quick brown fox jumps over the lazy dog.'));