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
	let number = false;
	jazbook.forEach(entry => {
  		if (entry[0] === name) {
  			number = entry[1];
  		}
  	})
  return number;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
	let phonebook = {};
	jazbook.forEach(entry => {
		phonebook[entry[0]] = entry[1];
	})
	phonebook.add = function(entry) {
		phonebook[entry[0]] = entry[1];
	}
	phonebook.remove = function(name) {
		delete phonebook[name];
	}
 	return phonebook;
}


var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
