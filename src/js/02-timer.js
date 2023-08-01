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
btnReset.style.backgroundColor = 'rgb(148, 233, 239)';

let waitDate = null;

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

let timerId = 0;
btnStart.addEventListener('click', () => {
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
      myInput.disabled = false;
      btnReset.disabled = true;
      btnReset.style.backgroundColor = 'rgb(148, 233, 239)';
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }, 1000);
});

btnReset.addEventListener("click", () => {
  clearInterval(timerId)
  myInput.disabled = false;

  days.textContent = '00';
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';

  btnStart.disabled = true;
  btnStart.style.backgroundColor = 'rgb(148, 233, 239)';
  btnReset.disabled = true;
  btnReset.style.backgroundColor = 'rgb(148, 233, 239)';
});

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