const categories = document.querySelector('#categories');
console.log(categories.children);
console.log('Task - 1');
console.log(`В списке ${categories.children.length} категории.`);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach((element) => {
    console.log( `Категория ${element.querySelector('h2').textContent}`);
     console.log(`Количество елементов ${element.querySelector('ul').children.length}`);
 });