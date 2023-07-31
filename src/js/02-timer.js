import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_green.css");
import { Report } from 'notiflix/build/notiflix-report-aio';

const myInput = document.querySelector('#datetime-picker');
console.dir(myInput);
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const btnReset = document.createElement('button');
btnStart.after(btnReset);
btnReset.disabled = true;

let waitDate = null;
// const todayDate = Date.now() ;
//     let diff = waitDate - todayDate;
//     console.log(diff)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose (selectedDates) {
    waitDate = Date.parse(selectedDates[0])
    if (waitDate < Date.now()) {
      btnStart.disabled = true;
      btnStart.style.backgroundColor = 'rgb(148, 233, 239)';

        return Report.failure('Ooops...',
        'Please choose a date in the future',
        'Ok',
      ); 
    } else {
      btnStart.disabled = false;
      btnStart.style.backgroundColor = 'rgb(30, 191, 203)';

      myInput.disabled = true;
    };
    console.log(waitDate)
  },
};

flatpickr(myInput, options);
myInput.addEventListener('input', options.onClose);

btnStart.addEventListener('click', convertMs)
btnReset.addEventListener('click', onReset)

let timerId = 0;
// function convertMs() {
//   myInput.disabled = true;

//   btnReset.disabled = false;
//   btnReset.style.backgroundColor = 'rgb(30, 191, 203)';

//   btnStart.disabled = true;
//   btnStart.style.backgroundColor = 'rgb(148, 233, 239)';

//   // let timerId = 0;
//   timerId = setInterval(() => {
//     const todayDate = Date.now() ;
//     let diff = waitDate - todayDate;
//     console.log(diff)
    
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const addZero = (value) => {
//     return String(value).padStart(2, 0);
//     };

//     const daysRest = addZero(Math.floor(diff / day));
//     const hoursRest = addZero(Math.floor((diff % day) / hour));
//     const minutesRest = addZero(Math.floor(((diff % day) % hour) / minute));
//     const secondsRest = addZero(Math.floor((((diff % day) % hour) % minute) / second));

//     days.textContent = daysRest;
//     hours.textContent = hoursRest;
//     minutes.textContent = minutesRest;
//     seconds.textContent = secondsRest;

//     if (diff < 1000) {
//       clearInterval(timerId)
//     }
//   }, 1000);
// };

timerId = setInterval(() => {
  myInput.disabled = true;

  btnReset.disabled = false;
  btnReset.style.backgroundColor = 'rgb(30, 191, 203)';

  btnStart.disabled = true;
  btnStart.style.backgroundColor = 'rgb(148, 233, 239)';
  
  const todayDate = Date.now();
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

function onReset() {
  myInput.disabled = false;
  btnStart.disabled = true;
  btnStart.style.backgroundColor = 'rgb(148, 233, 239)';
  // myInput.textContent = new Date();

  days.textContent = '00';
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
  
  clearInterval(timerId);

  btnStart.disabled = true;
  btnStart.style.backgroundColor = 'rgb(148, 233, 239)';
};


myInput.style.width = `${295}px`;
myInput.style.height = `${50}px`;
myInput.style.fontWeight = '700';
myInput.style.fontStyle = 'normal';
myInput.style.fontSize = `${24}px`;
myInput.style.border = `${5}px`;
myInput.style.borderColor = 'rgb(255, 211, 80)';
myInput.style.borderRadius = `${5}px`;
myInput.style.borderStyle = 'solid';

btnStart.style.width =`${150}px`;
btnStart.style.height = `${50}px`;
btnStart.style.fontFamily = 'Roboto';
btnStart.style.fontWeight = '700';
btnStart.style.fontStyle = 'normal';
btnStart.style.fontSize = `${24}px`;
btnStart.style.color = 'rgba(244, 55, 17, 0.942)';
btnStart.style.backgroundColor = 'rgb(148, 233, 239)';
btnStart.style.border = `${5}px`;
btnStart.style.borderColor = "rgb(255, 211, 80)";
btnStart.style.borderRadius = `${5}px`;
btnStart.style.borderStyle = 'solid';

btnReset.textContent = "Reset";
btnReset.style.width =`${150}px`;
btnReset.style.height = `${50}px`;
btnReset.style.fontFamily = 'Roboto';
btnReset.style.fontWeight = '700';
btnReset.style.fontStyle = 'normal';
btnReset.style.fontSize = `${24}px`;
btnReset.style.color = 'rgba(244, 55, 17, 0.942)';
btnReset.style.backgroundColor = 'rgb(148, 233, 239)';
btnReset.style.border = `${5}px`;
btnReset.style.borderColor = "rgb(255, 211, 80)";
btnReset.style.borderRadius = `${5}px`;
btnReset.style.borderStyle = 'solid';

































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