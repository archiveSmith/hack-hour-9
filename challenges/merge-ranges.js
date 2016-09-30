/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const mergedMeetings = [];
  const sortedArray = array.slice().sort((a, b) => a[0] - b[0]);

  sortedArray.forEach((el, i) => {
    // If the current meeting is the fist meeting
    // OR if the beginning of the current meeting is after the end of the last meeting in mergedMeetings,
    // Push into mergedMeetings
    if (mergedMeetings.length === 0 || el[0] > mergedMeetings[mergedMeetings.length - 1][1]) {
      mergedMeetings.push(el);
    } else {
      // If the end of the current meeting is after the end of the last meeting in mergedMeetings,
      // Modify the last mergedMeeting
      if (el[1] > mergedMeetings[mergedMeetings.length - 1][1]) {
        mergedMeetings[mergedMeetings.length - 1][1] = el[1];
      }
    }
  });

  return mergedMeetings;
}

module.exports = mergeRanges;
