//Задание 5.

//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const arr = [1,2,3,4,5,6,7]

console.log('Длина :',arr.length);

arr.forEach(function(item, i) {
    console.log('Элемент:',item,'индекс:',i);
  });
  //Добавил еще чтобы индекс показывался