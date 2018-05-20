var numberToString = require('./lib/numberToString');
/**
 * Converts number to text
 *
 * = = = = = = = = = = =
 *    Only cyrillic!
 * = = = = = = = = = = =
 *
 * @param value
 * @returns string
 */
exports.convert = function (value) {
  var stringRegExp = new RegExp(/^[A-Za-z]+$/);

  if (stringRegExp.test(value))
    throw new Error('String should be a valid number!');

  return numberToString(value);
};