import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromise = document.querySelector('.form');
console.dir(formPromise);
formPromise.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault()
  
    let amount = Number(evt.currentTarget.amount.value);
    let delay = Number(evt.currentTarget.delay.value);
    let step = Number(evt.currentTarget.step.value);
    
  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
      .then(({position, delay}) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };
}


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      };
    }, delay)
  });
};