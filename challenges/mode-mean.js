/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

  function mean(array) {
    let output = 0;
    array.forEach(function (num) {
      output += num;
    });
    output = output / array.length;
    console.log('mean', output)
    return output;
  }

		// function mode(array){
		// 	let mode = 0, modeCount = 0;
		// Refactored below for better O time.
		// array.forEach(function(num, index){
		// 	let count = 0;
		// 	for(let i = index; i < array.length; i++){
		// 		if(array[i] === num) count++;
		// 	}
		// 	if(count > modeCount){
		// 		mode = num;
		// 		modeCount = count;
		// 	}else if(count === modeCount && num > mode){
		// 		mode = num;
		// 	}
		// });
		function mode(array) {
    let modeObj = {};
    for (let i = 0; i < array.length; i++) {
      if (modeObj[array[i]]) {
        modeObj[array[i]] = modeObj[array[i]] + 1;
      } else {
        modeObj[array[i]] = 1;
      }
    }
    let outMode = 0, outModeCount = 0;
    for (let key in modeObj) {
      if (modeObj[key] > outModeCount) {
        outMode = key;
        outModeCount = modeObj[key];
      } else if (modeObj[key] = outModeCount && key > outMode) {
        outMode = key;
      }
    }
    console.log('mode', outMode)
    console.log('obj', modeObj)
    return Number(outMode);
		}

  let meanOut = mean(array);
  let modeOut = mode(array);
  if (meanOut === modeOut) {
    return true;
  } else {
    return false;
  }
}


modemean([2, 1])

module.exports = modemean;


function mode(array) {
		let modeObj = {};
		for (let i = 0; i < array.length; i++) {
    if (modeObj[i]) {
      modeObj[i] = modeObj[i] + 1;
    } else {
      modeObj[i] = 1;
    }
		}
		let outMode = 0, outModeCount = 0;
		for (let key in modeObj) {
    if (modeObj[key] > outModeCount) {
      outMode = key;
    } else if (modeObj[key] = outModeCount && key > outMode) {
      outMode = key;
    }
		}
		console.log('mode', outMode)
		return Number(outMode);
}

mode([1, 1, 2])