'use strict'

//1.	Напишите функцию, которая возвращает сумму
//элементов больше 5 в данном массиве.

function sumFive(arr){
    var resultSumFive = 0;
    for(var i = 0; i < arr.length;i++){
      if(arr[i] > 5){
         resultSumFive += arr[i];
      }
    }
    return resultSumFive;
  }

//   console.log(sumFive([1,5,20,30,4,9,18]));
//   console.log(sumFive([1,2,3,4]));
//   console.log(sumFive([10, 12, 28, 47, 55, 100]));

  //2.	Напишите функцию, преобразующую объект в массив ключей и значений.
  function objectToArray(obj){
    var arr = [];
    for(var key in obj){
      arr.push([key, obj[key]]);
    }
    return arr;
  }
  console.log(objectToArray({D: 1,B: 2,C: 3}));
  console.log(objectToArray({likes: 2,
                          dislikes: 3,
                          followers: 10}));

//3.	Массивы могут включать в себя разные типы данных.
//Ваша задача  - просуммировать все числовые элементы в данном массиве.
// Создайте функцию, которая принимает массив и возвращает сумму всех чисел в массиве.

function numbersSum(arr){
    var result = 0;
    for(var i = 0; i <arr.length; i++){
      if(arr[i] === parseInt(arr[i])){ // или arr[i] === +arr[i] или (arr[i] !== String(arr[i]) && arr[i] !== true)
        // console.log(arr[i]);
         result+= arr[i];
      }
    }
    return result;
  }
//   console.log(numbersSum([1, 2, "13", "4", "645"]));
//   console.log(numbersSum([true, false, "123", "75"]));
//   console.log(numbersSum([1, 2, 3, 4, 5, true]));

  //4. Создайте функцию, которая принимает объект и возвращает ключи и значения в виде отдельных массивов.
  //Возвращает ключи, отсортированные в алфавитном порядке, и их соответствующие значения в том же порядке.

      function keysAndValues(obj){
        var arrayKeysAndValues = [];
        for(var key in obj){
          arrayKeysAndValues.push([key, obj[key]]);
        }
        arrayKeysAndValues.sort();
        var values = [];
        var keys = [];
        for(var i = 0; i < arrayKeysAndValues.length; i++){
          keys.push(arrayKeysAndValues[i][0]);
          values.push(arrayKeysAndValues[i][1]);
        }
        return [keys, values];
      }

      function keysAndValues(obj){
    var values = [];
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    keys.sort();
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        values.push(obj[key]);
    }
    return [keys, values];
  }
  console.log(keysAndValues({ b: 3, a: 2, c: 1 }));

  function keysAndValues(object) {
    const objectKeys = Object.keys(object);
    objectKeys.sort();
    const resultArray = [objectKeys, []];

    for (const key of objectKeys) {
        resultArray[1].push(object[key]);
        console.log(key);
    }
    return resultArray;
}
  console.log(keysAndValues({ b: 3, a: 2, c: 1 }));
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));



