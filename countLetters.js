const assertEqual = require('./assertEqual');

const countLetters = (str) => {
  
  const result = {};
  let lowerCaseStr = str.toLowerCase().replace(/[ ,.?!]/g, "");
  
  for (let letter of lowerCaseStr) {

    if (!result[letter]) result[letter] = 1;
    
    else result[letter]++;
    
  }

  return result;

};

module.exports = countLetters;

