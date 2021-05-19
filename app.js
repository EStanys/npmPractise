import { compareAsc, format } from "date-fns";
import { getDay } from "date-fns";
import { formatDuration } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");
//=> '2014-02-11'

const dates = [new Date(1995, 6, 2), new Date(1987, 1, 11), new Date(1989, 6, 10)];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

console.log("vkr diena", new Date(2021, 5, 18).toDateString());

// 8.2 format duration

// 2.1 gauti kelintadienis buvo pries 8nias dienas

const givenDayInNumbFormat = getDay(new Date(2021, 5, 11));

function givenDayInWeekdays(givenDay) {
  const daysArr = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysArr.filter((day, index) => givenDay === index);
}

console.log("2.1 res:", givenDayInNumbFormat);
console.log("Weekday on given date:", givenDayInWeekdays(givenDayInNumbFormat));

// 2.2 gauti jei imanoma zmogisku laiku praeities laika minutemis// pvz 5 min ago, 2 hours ago ir pan

const timeAgo = `${formatDuration({
  minutes: 9,
  seconds: 30,
})} ago`;

console.log("2.2 result:", timeAgo);

// 3 nusiusti koda i gihub// 4 istrinti is savo kompiuterio ir parsisiusti su git clone

// 5 prideti skripta kuris paleisiu pagrindini faila su npm start
