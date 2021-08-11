let controlFontSize = document.getElementById("font-size-control");

let textEl = document.getElementById("text");

controlFontSize.oninput = function () {
  textEl.style.fontSize = controlFontSize.value + "px";
};

console.log(textEl);
console.log(controlFontSize);
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
