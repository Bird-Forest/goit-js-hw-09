import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromise = document.querySelector('.form');
formPromise.addEventListener('submit', onSubmit)
console.dir(formPromise);


function onSubmit(evt) {
  evt.preventDefault()

  let delay = Number(evt.currentTarget.delay.value);
  let step = Number(evt.currentTarget.step.value);
  let amount = Number(evt.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    setTimeout(() => {
      function createPromise({ position, delay }) {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        };
      }; 
    }, delay);  
    delay += step
  };
};

console.log(createPromise(2, 1500));