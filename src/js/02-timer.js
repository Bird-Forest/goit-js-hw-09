import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_green.css");
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const myInput = document.querySelector("#datetime-picker");
myInput.addEventListener('input', flatpickr)

const todayDate = Date.now();
console.log(todayDate)
let userDate = 1;
console.log(userDate);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates = selectedDates[0].getTime();
      if (selectedDates < Date.now()) {
      return Report.failure('УВАГА',
        'Обери дату та час у майбутньому',
        'Зрозуміло',
      );
    };
    console.log(selectedDates)
  },
};

flatpickr(myInput, options, {
 
});

































// flatpickr( myInput, {
//   defaultDate: new Date(),
//   enableTime: true,
//   time_24hr: true,
//   minuteIncrement: 1,

//     onClose(selectedDates) {
//     minDate = Date.now();
//     if (selectedDates[0].getTime() < Date.now()) {
//       Report.failure('УВАГА',
//         'Обери дату та час у майбутньому',
//         'Зрозуміло',
//       );
//     } 
//     return userDate = selectedDates[0].getTime();
//   },
   
// })









// const todayDate = Date.now();
// console.log(todayDate)
// const userDate = onClose(selectedDates);
// console.log(userDate);


const nowDay = new Date();
// console.dir(nowDay);
console.log(nowDay.getTime());
const dateUser = new Date('4/11/2023');
console.log(dateUser.getTime());
let result = dateUser - nowDay;
setInterval





// Report.failure(
// 'УВАГА',
// '"Обери дату та час у майбутньому"',
// 'Зрозуміло',
// );




//   altInput: true,
//   dateFormat: "YYYY-MM-DD",
//   altFormat: "DD-MM-YYYY",
//   allowInput: true,
  parseDate: (datestr, format) => {
    return moment(datestr, format, true).toDate();
  },
//   formatDate: (date, format, locale) => {
//     // locale can also be used
//     return moment(date).format(format);
//   }








arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Суббота'];


const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]')
const minute = document.querySelector('span[data-minutes]')
const second = document.querySelector('span[data-seconds]')

setInterval(() => {
    const date = new Date();
    const dateDay = arrDay[date.getDay()];
    const dateHour = date.getHours();
    const dateMinute = date.getMinutes();
    const dateSecond = date.getSeconds();

    day.textContent = dateDay;
    hour.textContent = dateHour;
    minute.textContent = dateMinute;
    second.textContent = dateSecond;
}, 1000);

const date = new Date();
    const dateDay = arrDay[date.getDay()];
    const dateHour = date.getHours();
    const dateMinute = date.getMinutes();
    const dateSecond = date.getSeconds();
day.textContent = dateDay;
hour.textContent = dateHour;
minute.textContent = dateMinute;
second.textContent = dateSecond;



































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