const listCategories = document.querySelector("#categories");
const itemsEl = listCategories.children;
console.log(itemsEl);
console.log(`В списке ${itemsEl.length} категории.`);

const liEl = document.querySelectorAll("#categories>li");
liEl.forEach((element) => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}, 
    Количество элементов: ${element.lastElementChild.children.length}`
  );
});

// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
