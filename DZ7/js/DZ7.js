//1.	Напишите функцию, которая переупорядочивает цифры каждого числового элемента в массиве в
//порядке возрастания (asc) или убывания (desc).

function reorderNums(arr, str) {
  var result = arr.map(function (elem, index) {
    newElem = elem.toString().split('').sort().join('') / 1;
    newElemDesc = elem.toString().split('').sort().reverse().join('') / 1;
    if (str === 'asc') {
      return newElem;
    }
    if (str === 'desc') {
      return newElemDesc;
    }
  });
  return result;
}
console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums([515, 341, 98, 44, 211], "desc"));
console.log(reorderNums([63251, 78221], "asc"));
console.log(reorderNums([63251, 78221], "desc"));
console.log(reorderNums([1, 2, 3, 4], "asc"));
console.log(reorderNums([1, 2, 3, 4], "desc"));

//2.	Напишите функцию, которая принимает закодированную строку и возвращает
//объект в соответствии со следующим примером:
function parseCode(str) {
  var obj = {};
  obj.firstName = str.slice(0, str.indexOf('0'));
  var lastName = str.slice(str.indexOf('0'), str.lastIndexOf('0')).replaceAll('0', ' ').trim();
  obj.lastName = lastName;
  obj.id = str.slice(str.lastIndexOf('0') + 1);
  return obj;
}
console.log(parseCode("John000Doe000123"));
console.log(parseCode("michael0smith004331"));
console.log(parseCode("Thomas00LEE0000043"));


//. Создайте функцию, которая принимает массив в качестве аргумента и 	возвращает истину или
//ложь в зависимости от того, является ли среднее 	всех элементов в массиве целым числом или нет.

function isAvgWhole(arr) {
  var sumArr = arr.reduce(function (number, elem) {
    return number += elem;
  }, 0);
  if (sumArr / arr.length === parseInt(sumArr / arr.length)) {
    return true;
  } else {
    return false;
  }
}
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));

//Дан массив чисел, верните массив, содержащий все четные числа в
//исходном массиве, который также имеет четные индексы.

function getOnlyEvens(arr) {
  var newArr = arr.filter(function (elem, index) {
    if (!(index % 2)) {
      return !(elem % 2);
    }
  });
  return newArr;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));