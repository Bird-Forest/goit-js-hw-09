import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_green.css");
import { Report } from 'notiflix/build/notiflix-report-aio';

const myInput = document.querySelector('#datetime-picker');
console.dir(myInput)
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let user = selectedDates[0].getTime();
    if (user < Date.now()) {
    return Report.failure('УВАГА',
      'Обери дату та час у майбутньому',
      'Ok',
      );
    }
    btnStart.disabled = false;
  },
};

flatpickr(myInput, options);

// btnStart.addEventListener('click', convertMs)
myInput.addEventListener('input', convertMs);

function convertMs(evt) {
  const date = evt.currentTarget.value;
  const waitDate = Date.parse(date)

  let timerId = 0;

  timerId = setInterval(() => {
    const todayDate = Date.now() ;
    let diff = waitDate - todayDate;
    console.log(diff)
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const addZero = (value) => {
    return String(value).padStart(2, 0);
    };

    const daysRest = addZero(Math.floor(diff / day));
    const hoursRest = addZero(Math.floor((diff % day) / hour));
    const minutesRest = addZero(Math.floor(((diff % day) % hour) / minute));
    const secondsRest = addZero(Math.floor((((diff % day) % hour) % minute) / second));

  days.textContent = daysRest;
  hours.textContent = hoursRest;
  minutes.textContent = minutesRest;
  seconds.textContent = secondsRest;

    if (diff < 1000) {
      clearInterval(timerId)
    }
  }, 1000);
};






// btnStart.addEventListener('click', onTimer)
// function onTimer() {
//   convertMs()
//   btnStart.disabled = true
// };

// let timerId = 0;

 
//   timerId = setInterval(convertMs, 1000, btnStart.disabled = true);
//   if (diff <= 0) {
//     clearInterval(timerId)
//   }




//     myInput.addEventListener('input', convertMs);
// let timerId = 0;
// btnStart.addEventListener("click", () => {
//   timerId = setInterval(() => {
    
//   }, 1000);
// });

// const timerID = setInterval(onWait, 1000);
// btnStart.addEventListener("click", (onWait) => {
//   timerId = setInterval(onWait, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });





































// const nowDay = new Date();
// // console.dir(nowDay);
// console.log(nowDay.getTime());
// const dateUser = new Date('4/11/2023');
// console.log(dateUser.getTime());
// let result = dateUser - nowDay;
// setInterval

// arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Суббота'];

// const day = document.querySelector('span[data-days]');
// const hour = document.querySelector('span[data-hours]')
// const minute = document.querySelector('span[data-minutes]')
// const second = document.querySelector('span[data-seconds]')

// setInterval(() => {
//     const date = new Date();
//     const dateDay = arrDay[date.getDay()];
//     const dateHour = date.getHours();
//     const dateMinute = date.getMinutes();
//     const dateSecond = date.getSeconds();

//     day.textContent = dateDay;
//     hour.textContent = dateHour;
//     minute.textContent = dateMinute;
//     second.textContent = dateSecond;
// }, 1000);

// const date = new Date();
//     const dateDay = arrDay[date.getDay()];
//     const dateHour = date.getHours();
//     const dateMinute = date.getMinutes();
//     const dateSecond = date.getSeconds();
// day.textContent = dateDay;
// hour.textContent = dateHour;
// minute.textContent = dateMinute;
// second.textContent = dateSecond;



































// const dateFormat = `${dateHour.toString().padStart(2, '0')}
// :${dateMinute.toString().padStart(2, '0')}
// :${dateSecond.toString().padStart(2, '0')} `
// console.log(dateFormat);

// const date = new Date();
// console.log(date);
// const currentDate = Date.now();
// console.log(currentDate);
// console.log(date.getMonth());
// const listMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Снопень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
// console.log(listMonth[date.getMonth()]);
// console.log(date.getDay());
// const listWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Суббота'];
// console.log(listWeek[date.getDay()]);

// РЕКЛАМА
// const box = document.querySelector('.box');
// const span = document.querySelector('.js-timer');
// let counter = 11;
// setTimeout(() => {
//     box.style.display = 'block';
//     const id = setInterval(() => {
//         counter -= 1;
//         span.textContent = counter;
//         if (!counter) {
//             clearInterval(id);
//             box.style.display = 'none';
//         }
//     }, 1000);
// }, 3000);
// // !counter counter ===0