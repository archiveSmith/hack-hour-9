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
  return makeJazBookIntoARealPhoneBookObject(jazbook)[name];
}

function makeJazBookIntoARealPhoneBookObject(jazbook) {

  const phonebook = jazbook.reduce((acc, next) => {
    console.log(next)
    const [name, number] = next;
    acc[name] = number;

    return acc;
  }, {});

  phonebook.add = function(name, number) {
    phonebook[name] = number;
  };

  phonebook.remove = function(name) {
    delete phonebook[name];
  };

  return phonebook;
}

var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
