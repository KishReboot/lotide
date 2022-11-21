# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kishreboot/lotide`

**Require it:**

`const _ = require('@kishreboot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: returns the beginning(head) values of an array
- `tail(array)`: returns the end(tail) values of an array
- `middle(array)`: returns the middle values of an array
- `assertArraysEqual(array, array)`: Compares two arrays, and returns true or false
- `assertEqual(actual, expected)`: Compares two values and returns true or false
- `assertObjectsEqual(object, object)`: Compares two objects and returns true or false
- `countLetters(string)`: Takes in a sentence, counts each letter and returns the values.
- `countOnly(allItems, itemsToCount)`: Takes in a collection of items(values), counts them and returns those values
- `eqArrays(array, array)`: Compares two arrays and returns true or false.
- `eqObjects(object, object)`: Compares two objects and returns true or false
- `findKey(object, callback)`: Takes in an object and callback, returns the value determined by callback
- `findKeyByValue(object, value)`: Takes in an object and a value that returns the key-value pair.
- `letterPositions(string)`: Takes in a string and returns the index of the letters in that string.
- `map(array, callback)`: Takes in an array and returns a new array
- `takeUntil(array, callback)`: Takes in an array and call back, returns a slice determined by callback.
- `without(source, itemToRemove)`: Takes in a source, and returns the values not in itemToRemove.
