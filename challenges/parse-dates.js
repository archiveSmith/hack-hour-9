// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

function parseDates(str) {
  
    const DAYS = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
  };

  const MONTHS = {
    'jan': 0,
    'feb': 1,
    'mar': 2,
    'apr': 3,
    'may': 4,
    'jun': 5,
    'jul': 6,
    'aug': 7,
    'sep': 8,
    'oct': 9,
    'nov': 10,
    'dec': 11
  };

  var date, ampm, times, month, dayOfMonth, day, hour, min;
    var sections = str.toLowerCase().split(' ');
    
    date = new Date();
    
    // regex to look for Month/Day name, day number (optional), time of day, then AM/PM
    if (!/^[a-zA-Z]{3,9}\s([0-9]{1,2}[a-z]{2}\s)?[0-9]{1,2}:[0-9]{2}\s(AM|PM)/.test(str)) {
      return date;
    }
    
  if (sections[0] in DAYS) {    
      // we have a day of week for the past week    
      day = sections[0];
      ampm = sections[2];
      times = sections[1].split(':');
      hour = parseInt(times[0]);
      min = parseInt(times[1]);
      
      date.setDate(date.getDate() - 1);
      while(date.getDay() !== DAYS[day]) {
        date.setDate(date.getDate() - 1);
      }
      
    }
    
   if (sections[0] in MONTHS) {    
      // we have a month in the past year
      month = MONTHS[sections[0]];
      dayOfMonth = parseInt(sections[1].replace(/[^\d]/g, ""));
      times = sections[2].split(':');
      hour = parseInt(times[0]);
      min = parseInt(times[1]);
      ampm = sections[3];
   
      date.setMonth(month);
      date.setDate(dayOfMonth);    
    }
    if (sections[0] === 'today') {   
      ampm = sections[2];
      times = sections[1].split(':');
      hour = parseInt(times[0]);
      min = parseInt(times[1]);    
    }
    
    if (ampm === 'am' && hour === 12) {
      hour = 0;
    } else if (ampm === 'pm' && hour < 12) {
      hour = hour + 12;
    }  
    date.setHours(hour);
    date.setMinutes(min);
    return date;
}

module.exports = parseDates;
