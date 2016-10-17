/**
 * You are given an array of arrays.  The subarrays are first names and phone numbers.
 *
 * Example:
 *   jazbook = [
 *     ['alex','301-844-3421'],
 *     ['jae','301-844-1211'],
 *     ['david','301-844-0978'],
 *     ['travis','301-844-8505'],
 *     ['jasmine','1800-974-4539'],
 *   ];
 *
 * jazbooks are not always sorted...
 *
 * Develop a function that takes in a jazbook and a name, searches through the jazbook and 
 * returns the persons phone number. If the person does not exists, return false.
 *
 * How efficient can you make this?
 */

function findName(jazbook, name) {
  let pb = makeJazBookIntoARealPhoneBookObject(jazbook)
  if (!pb[name]) {
    return false
  };

  return pb[name];
}

function makeJazBookIntoARealPhoneBookObject(jazbook) {
  let phonebook = {};
  for (var i = 0; i < jazbook.length; i++) {
    phonebook[jazbook[i][0]] = jazbook[i][1]
  }
  return phonebook;
}

// jazbook = [
//   ['alex', '301-844-3421'],
//   ['jae', '301-844-1211'],
//   ['david', '301-844-0978'],
//   ['travis', '301-844-8505'],
//   ['jasmine', '1800-974-4539'],
// ];

// console.log(findName(jazbook, 'travis'));
// console.log(findName(jazbook, 'jayce'));

var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports = objectToExport;