const assertEqual = require('./assertEqual');

const head = (arr) => {

  if (arr !== []) return arr[0];
  if (arr === []) return undefined;
};


/* You should always be thinking about other scenarios to consider.
 * Here are some such examples and how they should be handled:
 * An array with only one element should still yield that one element as its
 * head
 * An empty array should yield undefined as its head
 */


assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
assertEqual(head([]), undefined);
assertEqual(head([1, 2]), undefined);
assertEqual(head([1]), 1);
