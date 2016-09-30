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

  sortedArray.forEach((el) => {
    const lastMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (mergedMeetings.length === 0 || el[0] > lastMeeting[1]) {
      mergedMeetings.push(el);
    } else if (el[1] > lastMeeting[1]) {
      lastMeeting[1] = el[1];
    }
  });

  return mergedMeetings;
}

module.exports = mergeRanges;
