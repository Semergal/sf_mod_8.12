//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = prompt("Введите Слово", '');


function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString(str);

console.log(reverseString(str));