const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  animated: "ReBoot",
  fantasy: "The Princess Bride"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "ReBoot"), "animated");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Princess Bride"), "fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);