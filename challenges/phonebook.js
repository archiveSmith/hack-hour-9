/**
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
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
  let i = 0,
    j = 0,
    len = jazbook.length,
    nlen,
    nameSize = name.length,
    number;
  name = name.toLowerCase();
  for (; i < len; i++) {
    if (jazbook[i][0][0] === name[0]) {
      nlen = jazbook[i][0].length;
      if (nlen !== nameSize) continue;
      for (j = 0; j < nlen; j++) {
        if (jazbook[i][0][j] !== name[j]) break;
      }
      return jazbook[i][1];
    }
  }
  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook) {
  return new PhoneBook(jazbook);
}

function PhoneBook(book) {
  this.store = book.reduce((memo, entry) => {
    memo[entry[0]] = entry[1];
    return memo;
  }, {});
}

PhoneBook.prototype.add = function (entry) {
  if (entry.length !== 2 || !entry.every((item) => typeof item === 'string')) {
    return false;
  }
  this.store[entry[0]] = entry[1];
  return true;
}

PhoneBook.prototype.remove = function (name) {
  return delete this.store[name]
}

var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports = objectToExport;

