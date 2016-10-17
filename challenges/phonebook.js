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
  const phonebook = new makeJazBookIntoARealPhoneBookObject(jazbook);

  return phonebook.getNumber(name);
}

function makeJazBookIntoARealPhoneBookObject(jazbook) {
  this.phonebook = {};

  jazbook.forEach((person) => {
    this.phonebook[person[0]] = person[1];
  });
}

makeJazBookIntoARealPhoneBookObject.prototype.getNumber = function(name) {
  return this.phonebook[name] || false;
};

makeJazBookIntoARealPhoneBookObject.prototype.add = function(name, phone) {
  this.phonebook[name] = phone;
};

makeJazBookIntoARealPhoneBookObject.prototype.remove = function(name) {
  if (this.phonebook[name]) {
    const removed = this.phonebook[name];
    delete this.phonebook[name];
    return removed;
  } else {
    return undefined;
  }
};

const objectToExport = {
  findName,
  makeJazBookIntoARealPhoneBookObject,
};

module.exports = objectToExport;


// const jazbook = [
//      ['alex', '301-844-3421'],
//      ['jae', '301-844-1211'],
//      ['david', '301-844-0978'],
//      ['travis', '301-844-8505'],
//      ['jasmine', '1800-974-4539'],
// ];

// const number = findName(jazbook, 'jae');
