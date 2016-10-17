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
  let len = jazbook.length;
  const bookObj = {};
  if(bookObj.name){
    return bookObj.name;
  }
  for (let i = 0; i < len; i++) {
    if(jazbook[i][0] === name){
      bookObj.name = jazbook[i][1];
      return jazbook[i][1];
    }
  }
  return false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
  let len = jazbook.length;
  const phonebook = {};
  for(let i = 0; i < len; i++){
    let name = jazbook[i][0];
    let num = jazbook[i][1];
    phonebook[name] = num;
  }
  return phonebook;
}
makeJazBookIntoARealPhoneBookObject.prototype.add = function add(name, num){
  phonebook[name] = num;
}
makeJazBookIntoARealPhoneBookObject.prototype.remove = function remove(name, num){
  delete phonebook[name];
}


var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
