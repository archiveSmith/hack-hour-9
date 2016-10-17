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
  for (let i = 0; i < jazbook.length; ++i) {
    if (jazbook[i][0] === name) {
      return jazbook[i][1];
    }
  }
  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook) {
  const output = {};
  for (let i = 0; i < jazbook.length; ++i) {
    output[jazbook[i][0]] = jazbook[i][1];
  }
  output.add = function(name, phoneNumber) {
    this[name] = phoneNumber;
  };
  output.remove = function(name) {
    delete this[name];
  };
  return output;
}

// makeJazBookIntoARealPhoneBookObject.prototype.add = (name, phoneNumber) => {
//   this[name] = phoneNumber;
// };

// makeJazBookIntoARealPhoneBookObject.prototype.remove = (name) => {
//   delete this[name];
// };


var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;

// const jazbook = [
//   ['alex', '301-844-3421'],
//   ['jae', '301-844-1211'],
//   ['david', '301-844-0978'],
//   ['travis', '301-844-8505'],
//   ['jasmine', '1800-974-4539'],
// ];

// const book = new makeJazBookIntoARealPhoneBookObject(jazbook);
// console.log(findName(jazbook, 'david'), 'should be 301-844-0974');
// console.log(book);
// book.add('george', '123-456-7890');
// console.log(book);
// book.remove('alex');
// console.log(book);
