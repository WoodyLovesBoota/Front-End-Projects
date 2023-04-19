let now = new Date();
let target = new Date(2024, 1, 1);

let nowTime = now.getTime();
let targetTime = target.getTime();

let lest = Math.floor((targetTime - nowTime) / 1000);
let lestDate = Math.floor(lest / (60 * 60 * 24));
let lestHour = Math.floor((lest - lestDate * (60 * 60 * 24)) / (60 * 60));
let lestMinute = Math.floor(
  (lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60)) / 60
);
let lestSecond = Math.floor(
  lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60) - lestMinute * 60
);
