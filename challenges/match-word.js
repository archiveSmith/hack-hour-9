// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
 if(str.length === 0) return true;
 if(typeof str !== "string") return false;
 
 str = str.toLowerCase().replace(/[^0-9a-z]/gi, ' ').split(" ").filter( (item) => {
 	if (item !== " ") {
 		return item;
 	}
 });
 
 let cache = [];
 
 for(let i = 0; i < str.length; i++) {
 	let reversed = str[i].split("").reverse().join("");
 	if(cache[cache.length-1] !== str[i]) {
		cache.push(reversed);
 	} else {
 		cache.pop();
 	}
 }


return cache.length ? false : true;

}

module.exports = matchWord;
