/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let greatest = 0;
  let secondGreatest = 0;
  let thirdGreatest = 0;
  let greatestNegative = 0;
  let secondGreatestNegative = 0;
  let thirdGreatestNegative = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) > greatest) {
      if (array[i] > 0) {
        thirdGreatest = secondGreatest;
        secondGreatest = greatest;
        greatest = array[i];
      } else {
        thirdGreatestNegative = secondGreatestNegative;
        secondGreatestNegative = greatestNegative;
        greatestNegative = array[i];
      }
    } else if (Math.abs(array[i]) > secondGreatest) {
      if (array[i] > 0) {
        thirdGreatest = secondGreatest;
        secondGreatest = array[i];
      } else {
        thirdGreatestNegative = secondGreatestNegative;
        secondGreatestNegative = array[i];
      }
    } else if (Math.abs(array[i]) > thirdGreatest) {
      if (array[i] > 0) {
        thirdGreatest = array[i];
      } else {
        thirdGreatestNegative = array[i];
      }
    }
  }
  if (greatestNegative !== 0 &&
    secondGreatestNegative !== 0 &&
    (thirdGreatestNegative === 0 ||
      Math.abs(thirdGreatestNegative) < thirdGreatest ||
      Math.abs(thirdGreatestNegative) < secondGreatest ||
      Math.abs(thirdGreatestNegative) < greatest)) {
    greatestNegative = Math.abs(greatestNegative);
    secondGreatestNegative = Math.abs(secondGreatestNegative);
    const newGreats = [
      greatestNegative,
      secondGreatestNegative,
      greatest,
      secondGreatest,
      thirdGreatest,
    ];
    greatest = 0;
    secondGreatest = 0;
    thirdGreatest = 0;
    for (let i = 0; i < newGreats.length; i++) {
      if (newGreats[i] > greatest) {
        thirdGreatest = secondGreatest;
        secondGreatest = greatest;
        greatest = newGreats[i];
      } else if (newGreats[i] > secondGreatest) {
        thirdGreatest = secondGreatest;
        secondGreatest = newGreats[i];
      } else if (newGreats[i] > thirdGreatest) {
        thirdGreatest = newGreats[i];
      }
    }
  }
  return greatest * secondGreatest * thirdGreatest;
}



module.exports = highestProduct;
