function HashTable() {
  this.SIZE = 16;

  // the array will be instantiated as [undefined, undefined....]
  // the array length should not change in this problem
  this.storage = new Array(this.SIZE);
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function(key, value) {
  let index = hashCode(key,this.SIZE);
  if (this.storage[index] === undefined) {
    this.storage[index] = {key:value};
  } else {
    this.storage[index][key] = value;
  }
};

// return a previously stored value
HashTable.prototype.get = function(key) {
  let index = hashCode(key,this.SIZE);
  return this.storage[index][key];
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function(key) {

};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  var hash = 0;
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}
