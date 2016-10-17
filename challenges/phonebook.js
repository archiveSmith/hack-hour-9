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
	let phonenumber;
	jazbook.filter( subArray => {
	  	if(name === subArray[0]) {
	  		phonenumber =  subArray[1];
	  	}
	  });
	 return phonenumber ? phonenumber : false;
}

function makeJazBookIntoARealPhoneBookObject(jazbook){
	this.phoneBook = {};
	jazbook.forEach( subArray => 
		this.phoneBook[subArray[0]] = subArray[1]);
}

makeJazBookIntoARealPhoneBookObject.prototype.add = function(name, phonenumber) {
	if(name && phonenumber) {
		this.phoneBook[name] = phonenumber;
	}
}

makeJazBookIntoARealPhoneBookObject.prototype.remove = function(name) {
	delete this.phoneBook[name];
}
//add
//remove

//you can call them ‘add’ and ‘remove’
//the add method just takes info for one entry as params
//the remove takes in the name

var jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
    ['jasmine','1800-974-4539']
  ];

var objectToExport = {
  findName: findName,
  makeJazBookIntoARealPhoneBookObject: makeJazBookIntoARealPhoneBookObject
};

module.exports=objectToExport;
