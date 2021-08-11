const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredients = document.querySelector("ul");
console.log(ulIngredients);
const ingredientsAr = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
});
console.log(ingredientsAr);
ulIngredients.append(...ingredientsAr);

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
