let target = new Date(2024, 1, 1);
let main = document.getElementById("clock");
let content = document.createElement("p");
let content2 = document.createElement("p");

const padInt = (n) => {
  let res = String(n);
  if(String(n).length===1) {
    let arr = String(n).split('');
    arr.unshift('0');
    res = arr.join('');
  }
  return res;
}

const calcTime = () => {
  let now = new Date();
  let nowTime = now.getTime();
  let targetTime = target.getTime();

  let lest = Math.floor((targetTime - nowTime) / 1000);
  let lestDate = Math.floor(lest / (60 * 60 * 24));
  let lestHour = padInt(Math.floor((lest - lestDate * (60 * 60 * 24)) / (60 * 60)));
  let lestMinute = padInt(Math.floor(
    (lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60)) / 60
  ));
  let lestSecond = padInt(Math.floor(
    lest - lestDate * (60 * 60 * 24) - lestHour * (60 * 60) - lestMinute * 60
  ));
  
  let clockMessage =
    lestDate +
    "일 ";

  let clockMessage2 =
    lestHour +
    " : " +
    lestMinute +
    " : " +
    lestSecond;
    

  content.innerHTML = clockMessage;
  main.appendChild(content);
  content2.innerHTML = clockMessage2;
  main.appendChild(content2);
};

setInterval(calcTime, 1000);
