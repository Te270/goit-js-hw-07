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
