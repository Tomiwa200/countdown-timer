

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');


const newYears = '1 Jan 2023';




function countDown() {
    const newYearDate  = new Date(newYears);
    const currentDate = new Date();
const totalSeconds = (newYearDate-currentDate)/1000;

const days = Math.floor(totalSeconds/3600/24);
const hours = Math.floor(totalSeconds/3600/24)%24;
const mins = Math.floor(totalSeconds/60)%60;
const seconds =Math.floor(totalSeconds%60);




   
    daysEl.textContent= days;
    hoursEl.textContent = formatTime(hours);
    minsEl.textContent = formatTime(mins);
    secondsEl.textContent= formatTime(seconds);  
    
}

function formatTime(time) {
    return time < 10 ? `0${time}`:time;
}

countDown();
setInterval(countDown,1000);
