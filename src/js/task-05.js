let input = document.getElementById("name-input");

let nameOutput = document.getElementById("name-output");

input.oninput = function () {
  if (input.value === "") {
    nameOutput.innerHTML = "незнакомец";
  } else {
    nameOutput.innerHTML = input.value;
  }
};
console.log(input);
console.log(nameOutput);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
