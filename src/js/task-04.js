/* let valueEl = Number(document.querySelector("#value").textContent); */
let valueEl = 0;

let counterValue = document.querySelector("#value");

const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;

incrementBtn.addEventListener("click", (event) => {
  console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrementBtn.addEventListener("click", (event) => {
  console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  console.log("counterValue", counterValue);
});

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
