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
