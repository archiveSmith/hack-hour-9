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

  for(var i = 0; i < jazbook.length; ++i) {
	var entry = jazbook[i];
	// check for name match
	if(entry[0] === name) {
	  return entry[1];
	}
  }
  
  // name does not exist in jazbook
  return false;
  
  return number;
}

/* tests */
/*
var jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505']
     ['jasmine','1800-974-4539'],
   ];

console.log(findName(jazbook, 'david')); // 301-844-0978
*/
 
function makeJazBookIntoARealPhoneBookObject(jazbook){
  var phonebook = new PhoneBook();

  for(var i = 0; i < jazbook.length; ++i) {
	var entry = jazbook[i];	
	phonebook.add(entry[0], entry[1]);
  }
  
  return phonebook;
}

function PhoneBook() {
	this.entries = {};
}

PhoneBook.prototype.add = function(name, number) {
	this.entries[name] = number;
}

PhoneBook.prototype.remove = function(name) {
	
	var entry = this.entries[name];
	
	if(entry) {
		delete this.entries[name];
		
		var temp = {};
		temp[name] = entry;
		
		return temp; // returns the found entry
	} else {
		return false;
	}

}

/* tests */
/*
var p1 = new PhoneBook();
p1.add('alex','301-844-3421');
p1.add('jae','301-844-1211');

console.log(p1.entries);

console.log(p1.remove('jae'));

console.log(p1.entries);

console.log(p1.remove('diana'));

console.log(p1.entries);
*/
/*
var jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539']
   ];

console.log(makeJazBookIntoARealPhoneBookObject(jazbook));
*/

var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
