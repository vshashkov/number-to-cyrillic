var numberToString = require('./lib/numberToString');
/**
 * Converts number to text
 *
 * = = = = = = = = = = =
 *    Only cyrillic!
 * = = = = = = = = = = =
 *
 * @param value
 * @param options
 * @returns string
 */

exports.convert = function (value, options) {
  var stringRegExp = new RegExp(/^[A-Za-z]+$/);

  if (stringRegExp.test(value)) { throw new Error('String should be a valid number!'); }

  if (typeof value === 'number') {
    value = value.toString();
  }

  //
  // Replace comma value with the dot and all spaces with no-spaces
  // It will allow us to correctly parse numbers
  //
  value = +value.replace(',', '.').replace(/ /g, '');

  return numberToString(value, options);
};
