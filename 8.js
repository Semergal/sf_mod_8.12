//Задание 8.

//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

//Используйте шаблонные

let beverages = new Map([
  ['Sprite', 30],
  ['Fanta', 40],
  ['Cola', 50]
]);


for (var [key, value] of beverages.entries()) {
  console.log("Ключ -",key + ',' + "Значение - ",value);
}