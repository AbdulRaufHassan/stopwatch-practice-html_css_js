let hour = 0;
let minute = 0;
let second = 0;
let timerStart = false;
let secondElement = document.getElementById('second');
let minuteElement = document.getElementById('minute');
let hourElement = document.getElementById('hour');

let startAndStopButn = document.getElementById('startAndStopBtn');
function start() {
    if (!timerStart) {
        timerStart = true;
        startAndStopButn.innerText = 'Stop';
        startAndStopButn.style.color = 'rgb(38, 50, 56)';
        startAndStopButn.style.border = '2px solid rgb(38, 50, 56)';
        startAndStopButn.style.backgroundColor = 'white';
        mainTimerFunc();
    } else {
        timerStart = false;
        startAndStopButn.innerText = 'Start';
        startAndStopButn.style.backgroundColor = 'rgb(38, 50, 56)';
        startAndStopButn.style.color = 'white';
    }
}

document.getElementById('resetBtn').addEventListener('click', reset);
function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    secondElement.innerText = '00';
    minuteElement.innerText = '00';
    hourElement.innerText = '00';
    timerStart = false;
    startAndStopButn.innerText = 'Start';
    startAndStopButn.style.backgroundColor = 'rgb(38, 50, 56)';
    startAndStopButn.style.color = 'white';
}

function mainTimerFunc() {
    if (timerStart) {
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        secondElement.innerText = second < 10 ? `0${second}` : second;
        minuteElement.innerText = minute < 10 ? `0${minute}` : minute;
        hourElement.innerText = hour < 10 ? `0${hour}` : hour;
        setTimeout(mainTimerFunc, 1000);
    }
}