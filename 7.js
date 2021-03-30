//Задание 7

//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let arr = [1, 2, 3, 4, 5, 0, 1, 0, 33, null, '*', true, '123', 44, 47];

let even = 0;
let zero = 0;
let notEven = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) == "number" && arr[i] == 0)
    zero += 1
  else if (typeof(arr[i]) == "number" && arr[i] % 2 == 0)
    even += 1
  else if (typeof(arr[i]) == "number")
    notEven += 1
  else
    ;
}

console.log("Нулевой элемент:",zero)
console.log("Четное:",even)
console.log("Не четное",notEven)

