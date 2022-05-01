'use strict'

//N.4 Домашнее задание TREESUM
//1. Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут
//быть числами или снова массивами, и так до любого уровня.
//Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
//При написании функции не описывать каких-либо вложенных в неё функций.
//Проверить работу функции можно на следующем массиве (сумма 50):

function treeSum(arr){
  var arrStr =  arr.join(',');
  arr = 0;
  for(var i = 0; i < arrStr.length; i++){
    if(parseInt(arrStr[i]) === parseInt(arrStr[i])){
      arr += parseInt(arrStr[i]);
    }
  }
  return arr;
}

console.log(treeSum([5,7, [4, [2], 8, [1,3],2],[9,[]],
  1, 8]));


  function treeSum(arr){
    var newArr = arr.flat(Infinity);
    arr = 0;
    for(var i = 0; i < newArr.length; i++){
      if(parseInt(newArr[i]) === parseInt(newArr[i])){
        arr += parseInt(newArr[i]);
      }
    }
    return arr;
  }
  console.log(treeSum([5,7, [4, [2], 8, [1,3],2],[9,[]],
    1, 8]));

//2. Создайте функцию, которая принимает число как строку n и возвращает число
//без конечных и стартовых нулей.
//Конечные нули - это нули после десятичной точки, которые не влияют на значение
//(например, последние три нуля в 6.7000 и 6.07000).
//Стартовые нули - это нули перед целым числом, которые не влияют на значение
//(например, первые три нуля в 000427 и 000930).

function removeLeadingTrailing(n){
  return  +n + '';
}

console.log(removeLeadingTrailing("190.000"));
console.log(removeLeadingTrailing("00803"));
console.log(removeLeadingTrailing("07.1200"));
console.log(removeLeadingTrailing("90"));
console.log(removeLeadingTrailing("0.0"));

