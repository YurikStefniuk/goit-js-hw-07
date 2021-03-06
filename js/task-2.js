console.log('Task-2');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');
const addIngredient = (elements) =>
    ingredients.map((element) => {
        const itemEl = document.createElement('li')
        itemEl.textContent = element;
        return itemEl;
    });
const items = addIngredient(ingredients)
    ingredientsEl.append(...items);