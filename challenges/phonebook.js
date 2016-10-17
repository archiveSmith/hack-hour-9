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
  const arrLen = jazbook.length;
  for (var i = 0; i< arrLen; i++) {
    if (jazbook[i][0] == name) {
      var number = jazbook[i][1];
      return number
    }
  }
  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
  const phonebook = {};
  const arrLen = jazbook.length;
  for (var i = 0; i < arrLen; i++) {
    let key = jazbook[i][0];
    phonebook[key] = jazbook[i][1];
  }

  return phonebook;
}


// var jazbooki = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmine','1800-974-4539']
// ];
// console.log(findName(jazbooki, 'david'));



var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
